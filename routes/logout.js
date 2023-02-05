const MQServices = require('../services/MQServices');
const verify = require('../middleware/verify')
const router = require('express').Router()

router.get('/', verify, async(req, res) => {
    try {
        res.clearCookie("secret")
        const {queueName} = req.body
        await MQServices.publishToQueue(queueName, "Logout");
        res.status(200).send({
            'msg': 'Logout Successful',
            'message-sent' : true
        })
    } catch (err) {
        console.log(err.toString());
        res.status(500).send('Unable to logout')
    }
})

module.exports = router