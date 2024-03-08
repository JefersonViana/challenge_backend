import Joi from 'joi';

export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().min(3).required(),
});

export const phoneSchema = Joi.object({
  name: Joi.string().min(3).required(),
  brand: Joi.string().min(2).required(),
  model: Joi.string().min(1).required(),
  price: Joi.number().required(),
  color: Joi.string().min(3).required(),
});