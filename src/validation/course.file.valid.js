import Joi from 'joi';


export const courseFileValidation = async (body) => {

    const validationSchema = Joi.object(
        {
            fileId: String,
            courseId: String
        }
    );

    const { error, value } = validationSchema.validate(body);

    if(error) {
        throw err
    }
    return value
}