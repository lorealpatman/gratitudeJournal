const Joi = require("joi");
// Joi.objectId = require("joi-objectid")(Joi);

const schema = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  date: Joi.date().required(),
  entry: Joi.string().required()
};

module.exports = Joi.object().keys(schema);
