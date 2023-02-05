const jwt = require('jsonwebtoken')

async function verify(req, res, next){
    try {
        const token = req.cookies.secret
        const verification = jwt.verify(token, process.env.JWT_SECRET)
        if(verification){
            req.user = verification.user
            next()
        }
        else return res.status(401).json("Uauthorized User")
    } catch (err) {
        return res.status(500).send(err.toString())
    }
}

module.exports = verify