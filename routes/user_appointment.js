const express = require('express');
const router = express()
const User_appointment = require('../controller/user_appointment')

router.get('/appointments', async (req, res) =>{
    try {
        const appointments = await User_appointment.getAll({...req.query})
        
        res.send(appointments)

    } catch (err) {
        console.log(err.toString());
        res.send({
            message: err.toString()
        }).status(500)
    }
})

module.exports = router