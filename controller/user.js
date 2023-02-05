const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {users: User} = require('../database/models/')
const saltRounds = 10;

async function register(params){
    try {
        console.log(User);
        const {username, password} = params
        let user = await User.findOne({
            where:{username}
        });
        if(user){
            // proceed to login page
            return false
        }
        else{
            // create user
            const hash = await bcrypt.hash(password,saltRounds)
            user = User.create({
                username : username,
                password : hash
            })
            return user
        }
        
    } catch (err) {
        throw err.toString()
    }
}

async function login(params){
    try {
        const {username} = params
        const user = await User.findOne({
            where: {
                username : username,
            }
        })
        if (user) {
            const result = await bcrypt.compare(params.password, user.password)
            if (result) {
                const token = jwt.sign('user', process.env.JWT_SECRET)  
                return token
            }
            throw Error("Invalid password")
        }
    } catch (err) {
        console.log(err.toString());
        throw err.toString()
    }
}

module.exports = {register, login}