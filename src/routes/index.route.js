import { Router } from "express";
import { authRouter } from "./auth.route.js";
// import { fileRouter } from "./file.route.js";
// import { courseRouter } from "./course.route.js";
// import { userCourseRoute } from "./user.course.route.js";
// import { courseFileRouter } from "./course.file.route.js";
import { createUserTable } from "../models/user.model.js";
import { createCourseTable } from "../models/course.model.js";
import { createFileTable } from "../models/file.model.js";
import { createUserCourseTable } from "../models/user.course.model.js";
import { createCoursFileTable } from "../models/course.file.model.js";
import { createOtpTable } from "../models/otp.model.js";
import { refreshDb } from "../models/refreshtoken.model.js";

export const router = Router();


export const setTable = async (req, res) => {
    try {

        createUserTable();
        refreshDb();
        createCourseTable();
        createFileTable();
        createOtpTable();
        createUserCourseTable();
        createCoursFileTable();
        return res.status(200).send({
            message: "All created"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            error: err
        });
    };
};



router.use('/auth', authRouter);
router.get('/setTable', setTable);
// router.use('/file',fileRouter);
// router.use('/course',courseRouter);
// router.use('/usercourse',userCourseRoute);
// router.use('/coursefile', courseFileRouter);

