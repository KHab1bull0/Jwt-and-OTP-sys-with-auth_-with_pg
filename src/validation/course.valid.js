import Joi from 'joi';


export const courseValidation = async (body) => {
    const validSchema = Joi.object({
        id: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required()
    })

    const {error, value} = validSchema.validate(body);
    if(error){
        throw error;
    };
    return value
}