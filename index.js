const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const login = require('./routes/login')
const register = require('./routes/register')
const dotenv = require('dotenv');
const user = require('./routes/user');
const logout = require('./routes/logout')
var cookies = require("cookie-parser");

dotenv.config()

app.use(cookies());

// Parsing JSON for all api requests
app.use(express.json())


// Defining base route paths for both routes
app.use('/login', login)
app.use('/register', register)
app.use('/user', user)
app.use('/logout',logout)

app.get('/',(req,res) => {
    res.send('hi')
})

// Setting up Swagger

// app.use('/api/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Firing up the server

var fp = require("find-free-port")
fp(3000, function (err, freePort) {
    if(err){
        console.log(err.toString);
        throw err
    }
    app.listen(freePort, () => {
        console.log('Server started listening on :', freePort);
    })
});
