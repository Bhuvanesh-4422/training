import Joi from 'joi';

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    username:Joi.string().required()
});

const partialUserSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    username:Joi.string()
});

export const validateUserData = (req, res, next) => {
    const { error } = req.method === 'POST'
        ? userSchema.validate(req.body)
        : partialUserSchema.validate(req.body);

    if (error) {
        error.status = 422;
        error.details = [{
            error_message: error.message,
            data: req.body,
            key: error.details[0].context.key,
            success: false,
        }];
        return next(error);
    } else {
        next();
    }
};
