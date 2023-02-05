const verify  = require('../middleware/verify')
const {users : User} = require('../database/models')

const router = require('express').Router()

router.get('/all', verify, async (req,res) => {
    try {
        const users = await User.findAll();
        if(users) res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err.toString())
    }
})

router.get('/',verify, async (req,res) => {
    try {
        const users = await User.find({
            username: req.body.username
        });
        if (users) res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err.toString())
    }
})

module.exports = router