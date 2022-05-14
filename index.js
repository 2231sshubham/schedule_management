const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const appointment = require('./routes/appointment')
const user_appointment = require('./routes/user_appointment')

// Parsing JSON for all api requests
app.use(express.json())


// Defining base route paths for both routes
app.use('/api/appointment', appointment)
app.use('/api/user_appointment', user_appointment)


// Setting up Swagger

app.use('/api/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Firing up the server

app.listen(3000,()=>{
    console.log('Connected to server');
})