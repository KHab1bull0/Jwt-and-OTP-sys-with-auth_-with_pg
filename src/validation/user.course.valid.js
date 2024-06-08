import Joi from 'joi';

export const userCourseValidation = async (reqbody) =>  {

    const schema = Joi.object({
        userId: String,
        courseId: String
    });

    const { error, value } = schema.validate(reqbody);

    if(error) {
        throw err
    }
    return value
}