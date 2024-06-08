import Joi from "joi";

export const fileValidation = (body) => {

    const filevalid = Joi.object({
        fileUrl: Joi.string().required(),
        filename: Joi.string().required()
    });

    const {error, value} = filevalid.validate(body);
    if(error){
        throw error;
    };
    return value
};