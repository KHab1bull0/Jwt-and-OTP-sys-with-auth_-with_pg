import { pool } from "../config/pgdb.js";


export const createCoursFileTable = () => {

    try {
        const query = `
            CREATE TABLE IF NOT EXISTS courseFile (
                id SERIAL PRIMARY KEY,
                fileId INT,
                courseId INT,
                FOREIGN KEY (fileId) REFERENCES files(id),
                FOREIGN KEY (courseId) REFERENCES courses(id)
            );
        `;

        const info =  pool.query(query, [], (err, result) => {
            if(err){
                throw err
            }
            console.log('CourseFile table yaratildi.');
        });

    } catch (err) {
        throw err;
    };
};
