import Joi from "joi";

const createGameSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  category: Joi.string().min(2).max(1024).required(),
  level: Joi.string().min(2).max(1024).allow(""),
  rating: Joi.number().min(3).max(6).allow(""),
  discount: Joi.number().min(0).max(100).allow(""),
  price: Joi.number().min(0).max(1000).required(),
  image: Joi.object().keys({
    url: Joi.string().uri({ scheme: ["http", "https"] }),
    alt: Joi.string().min(2).max(256).allow(""),
  }),
  trailer: Joi.string().uri({ scheme: ["http", "https"] }).allow(""),
  // active: Joi.boolean().allow(""),
});

const createGameSchemaValidation = (gameInput) => {
  return createGameSchema.validateAsync(gameInput);
};
export default createGameSchemaValidation;
