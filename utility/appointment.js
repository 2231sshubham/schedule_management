const { User_appointments,Appointments } = require('../database/models')

let available_users = []
let unavailable_users = []

async function distinct_users(users,from){

    for await (let user of users) {
        const appointments = await User_appointments.findAll({
            where: {
                user_name: user
            },
            include: {
                model: Appointments,
                as: 'appointment'
            },
            raw: true,
            nest: true
        })

        let flag = 1

        if (appointments) {
            appointments.forEach(appointment => {
                console.log(appointment);
                if (appointment.appointment.from <= from && appointment.appointment.to >= from) {
                    flag = 0
                }
            });
        }

        if (flag)
            available_users.push(user)
        else
            unavailable_users.push(user)

    };

    return ({
        available_users: available_users,
        unavailable_users: unavailable_users
    })
}

module.exports = { distinct_users }