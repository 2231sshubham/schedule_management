const express = require('express')
const router = express()
const User = require('../controller/user')

router.post('/',async (req,res) => {
    try {
        const token = await User.login({...req.body})
        res.cookie("secret", token, {
            maxAge: 86400,
            httpOnly: true
        });
        res.status(200).send('Success')
    } catch (err) {
        console.log(err.toString());
        res.send({
            message: err.toString()
        }).status(500)
    }
})

module.exports = router
