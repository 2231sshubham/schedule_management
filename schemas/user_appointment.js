const Joi = require('joi');

function getAll(){

    return Joi.object({
        user_name: Joi.string().required()
    })
}

module.exports = { getAll }