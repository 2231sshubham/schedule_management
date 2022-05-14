const express = require('express');
const router = express();
const Appointment = require('../controller/appointment')

router.post('/add', async(req, res) => {
    try {
        const appointment = await Appointment.add({...req.body})
        res.send({
            appointment,
            message:'success'
        })
    } catch (err) {
        console.log(err.toString());
        res.send({
            message:err.toString()
        }).status(500)
    }
})

module.exports = router