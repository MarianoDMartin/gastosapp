import Joi from 'joi';

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().min(1).required(),
  lastname: Joi.string().min(1).required(),
  country: Joi.string().min(1).required(),
});

export default createUserSchema;
