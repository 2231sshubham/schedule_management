const swaggerJSDoc = require('swagger-jsdoc')
const packageJSON = require('./package.json')

//swagger options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: `Schedule Management`,
            version: '0.0.1',
            description: 'API documentation for Schedule Management Project.'
        },        
        servers: [{
            url: 'http://localhost:3000/api',
            description: 'local endpoint'
        },
        {
            url: `https://localhost:3000/api/`,
            description: `${process.env.NODE_ENV} endpoint`           
        }
        ]
    },
    apis: [`./routes/*.js`, `./docs/*.js`]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)
module.exports = swaggerDocs