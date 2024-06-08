// import { postOne, getAll, getOne, putOne, deleteOne } from "../services/course.service.js";
// import { courseValidation } from "../validation/course.valid.js";


// export const postCourse = async (req, res) => {
//     try {

//         const reqbody = await courseValidation(req.body);
//         console.log(reqbody);

//         const data = await postOne(reqbody);

//         return res.status(201).send({
//             message: "Course Added to database",
//             data: data
//         });

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             message: err.message
//         })
//     }
// }

// export const getAllCourse = async (req, res) => {
//     try {

//         const data = await getAll();

//         return res.status(200).send({
//             message: "All courses",
//             data: data
//         })

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             error: err
//         })
//     }
// }

// export const getOneCourse = async (req, res) => {
//     try {
//         const { id } = req.params
//         const data = await getOne(id);

//         if(data.lenght == 0){
//             return res.status(200).send({
//                 message: "User not found"
//             });
//         }

//         return res.status(200).send({
//             message: "Ok",
//             data: data
//         });

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             error: err
//         })
//     }
// }


// export const putOneCourse = async (req, res) => {
//     try{
//         const {id} = req.params;
//         const reqbody = await courseValidation(req.body);
//         const data = await putOne(id, reqbody);

//         return res.status(200).send({
//             data: data
//         })

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             error: err
//         })
//     }
// }

// export const deleteOneCourse = async (req, res) => {
//     try{
//         const {id} = req.params;

//         const data = await deleteOne(id);
//         return res.status(200).send({
//             data: data
//         });

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             error: err
//         })
//     }
// }