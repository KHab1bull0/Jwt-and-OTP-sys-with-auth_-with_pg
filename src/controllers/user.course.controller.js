import { getOneInt } from "../services/universal.service.js";
import { userCourseValidation } from "../validation/user.course.valid.js";


export const setUserCourse = async (req, res) => {
    try {
        const body = await userCourseValidation(req.body);

        const { id } = req.params

        const data1 = await getOneInt('userCourse', 'id', );

        if (!data1.data1.length) {
            return res.status(400).send({
                message: "Bunday user mavjud emas"
            });
        }

        if (data1.data2.length) {
            return res.status(400).send({
                message: "Data already exist"
            })
        }

        const data2 = await setCourse(body);

        return res.status(201).send({
            message: "User Course Created",
            data: data2
        })

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            error: err
        });
    }
}

// export const getUserCourse = async (req, res) => {
//     try {

//         const { userId } = req.params

//         const data = await getOne(userId);
//         console.log(data);

//         if (!data.data1.length) {
//             return res.status(400).send({
//                 message: "Bunday user mavjud emas"
//             });
//         }

//         const course = await getCourse(data.data2[0].courseId);

//         return res.status(200).send({
//             data: course
//         });


//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             error: err
//         })
//     }
// }

// export const deleteUserCourse = async (req, res) => {
//     try {

//         const { id, userId } = req.params;

//         const data = await getOne(userId, id);

//         if(!data?.data1.length){
//             return res.status(400).send({
//                 message: "User not found"
//             });
//         };

//         if(!data?.data3.length){
//             return res.status(400).send({
//                 message: "Course not found"
//             });
//         };

//         const info = await deleteOne(userId, id);

//         return res.status(200).send({
//             data: info
//         });

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             error: err
//         })
//     }
// }
