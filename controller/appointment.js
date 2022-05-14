const { Appointments, User_appointments } = require('../database/models/')
const { dateToUnix } = require('../utility/dateToUnix')
const appointmentSchema = require('../schemas/appointment')
const { Op } = require('sequelize')
const { distinct_users } = require('../utility/appointment')

async function add (params = {}) {
    try {

        // Validating the parameters passed by user
        await appointmentSchema.add().validateAsync(params)                
         
        let { fromDate, fromTime, toDate, toTime, roomNo, users } = params 
        let appointments = []


        // Converting date & time into unix format

        let from = dateToUnix({
            date: fromDate,
            time: fromTime
        })
        let to = dateToUnix({
            date: toDate, 
            time: toTime
        })

        from = from.toString()
        to = to.toString()


        // check_appointment will be used to evaluated if the required room if free for the provided time

        const check_appointment = await Appointments.findOne({
            where: {
                roomNo,
                from: {
                    [Op.lte] : from
                },
                to: {
                    [Op.gte]: from
                }
            }
        })

        // Return failed status if slot not available

        if(check_appointment){
            return { message: "Failed, slot not available"}
        }

        //  Else create appointment for the slot and room provided

        const appointment = await Appointments.create({from,to,roomNo})
        const { appointment_id } = appointment



        // If not failed, checking which users are available during the time slot distinguished as 'available_users' and 'unavailable_users' 
        
        const { available_users, unavailable_users} = await distinct_users(users,from)



        // If no user free, return failed status

        if(available_users.length === 0)
            return ({message:"Failed, no user free for the slot"})

        // Else create User_appointment entry for every user against the appointment created earlier

        for await (let available_user of available_users) {

            const userAppointment = await User_appointments.create({
                user_name: available_user,
                appointment_id
            })
            appointments.push(userAppointment)
        };

        // Return 'unavailable_users' array if any user not available

        if(unavailable_users.length === 0)
            return appointments
        else
            return ({
                appointments,unavailable_users
            })
        
    } catch (err) {
        throw err.toString()
    }
}

module.exports = { add }