const { Appointments, User_appointments } = require('../database/models/')
const User_appointmentsSchema = require('../schemas/user_appointment')

async function getAll(params) {
    try {
        await User_appointmentsSchema.getAll().validateAsync()

        const {
            user_name
        } = params

        // Fetching all the appointments of a user by using association from 'user_appointments' model to 'appointments' model

        const appointments = await User_appointments.findAll({
            where: {user_name},
            include: {
                model: Appointments,
                as: 'appointment'
            },
            raw: true,
            nest: true
        })

        return appointments
        
    } catch (err) {
        throw err.toString()
    }
}

module.exports = { getAll }