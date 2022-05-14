const { string } = require('joi');
const Joi = require('joi');

function add() {
    return Joi.object({
        users: Joi.array().items(Joi.string()),
        fromDate: Joi.string(),
        fromTime: Joi.string(),
        toDate: Joi.string(),
        toTime: Joi.string(),
        roomNo: Joi.number()
    })
}

module.exports = { add }