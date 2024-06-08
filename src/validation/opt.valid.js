import Joi from 'joi';


export const otpValidation = async (body) => {

    const otpvalid = Joi.object({
        email: Joi.string().email().required(),
        otp: Joi.string().min(6).max(6).required()
    });

    
    const {error, value} = otpvalid.validate(body);
    if(error){
        throw error;
    };

};