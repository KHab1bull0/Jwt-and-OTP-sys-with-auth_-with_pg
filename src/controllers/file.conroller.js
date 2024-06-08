// import { deleteFile, getAllfile, getFile, putOne, uploadfile } from "../services/file.service.js";
// import { fileValidation } from "../validation/file.valid.js";


// export const fileUpload = async (req, res) => {
//     try {

//         const validData = fileValidation(req.body);
//         const filedata = await uploadfile(validData);

//         return res.status(200).send({
//             message: "File Uploaded",
//             fileId: filedata._id
//         });

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             message: "Xatolik",
//             error: err
//         })
//     }
// }

// export const getAllUploadedFile = async (req, res) => {
//     try {

//         const data = await getAllfile();
//         return res.status(200).send({
//             data: data
//         });

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             message: "Xatolik",
//             error: err
//         })
//     }
// }

// export const deleteOneFile = async (req, res) => {
//     try {

//         const { id } = req.params;

//         const data = await deleteFile(id);
//         return res.status(200).send({
//             message: "File deleted"
//         });


//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             message: "Xatolik",
//             error: err
//         })
//     }
// }

// export const getOnefile = async (req, res) => {
//     try {

//         const { id } = req.params;
//         const data = await getFile(id);

//         if (data.length == 0) {
//             return res.status(404).send({
//                 message: "User not Found"
//             });
//         };

//         return res.status(200).send({
//             data: data
//         });

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             message: "Xatolik",
//             error: err
//         })
//     }
// }

// export const putOnefile = async (req, res) => {
//     try {
//         const {id} = req.params
//         const { filename } = req.body;
//         if(typeof filename === 'string' && filename.length > 3){

//             const data = await putOne(id, filename);
//             return res.status(200).send({
//                 message: "File Updated"
//             });

//         }else {
//             return res.status(400).send({
//                 error: "Bad request Invalid filename",
//             })
//         }

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({
//             message: "Xatolik",
//             error: err
//         });
//     };
// };