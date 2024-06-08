// import { deleteOnefile, getfunc, insertOne } from "../services/course.file.service.js";
// import { courseFileValidation } from "../validation/course.file.valid.js";


// export const setCourseFile = async (req, res) => {
//     try {

//         const validInfo = await courseFileValidation(req.body);
//         console.log(validInfo);

//         const check = await getfunc(validInfo, "getCourseFileByBoth");
//         console.log(check);

//         if (check.length) {
//             return res.status(400).send({
//                 message: "CourseFile mavjud"
//             });
//         };


//         const insertData = await insertOne(validInfo);

//         return res.status(200).send({
//             message: "Course file qo'shildi",
//             data: insertData
//         });

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             error: err
//         })
//     }
// }

// export const getCourse = async (req, res) => {
//     try {

//         const { courseId } = req.params

//         const data = await getfunc(courseId, 'getCourseFileByCourseId');
//         console.log(data.length)

//         if (!data.length) {
//             return res.status(200).send({
//                 message: "CourseFile mavjud emas"
//             })
//         }

//         const file = await getfunc(data[0].fileId, 'getFileById');

//         return res.status(200).send({
//             data: file
//         })

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             error: err
//         })
//     }
// }

// export const deleteCourseFile = async (req, res) => {
//     try {

//         const { fileId, courseId } = req.params;

//         const data = await getfunc({ fileId, courseId }, 'getCourseFileByBoth');

//         if (!data.length) {
//             return res.status(400).send({
//                 message: "CourseFile topilmadi."
//             });
//         };

//         const deleteinfo = await deleteOnefile(data[0]);

//         return res.status(200).send({
//             message: "O'chirildi."
//         })


//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             error: err
//         })
//     }
// }