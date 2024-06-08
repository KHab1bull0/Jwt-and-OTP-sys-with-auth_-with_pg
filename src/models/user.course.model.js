import { pool } from "../config/pgdb.js";


export const createUserCourseTable = () => {

    try {
        const query = `
            CREATE TABLE IF NOT EXISTS userCourse (
                id SERIAL PRIMARY KEY,
                userId INT,
                fileId INT,
                FOREIGN KEY (userId) REFERENCES users(id),
                FOREIGN KEY (fileId) REFERENCES files(id)
            );
        `;

        const info = pool.query(query, [], (err, result) => {
            if(err){
                throw err
            }
            console.log('UserCourse table yaratildi.');
        });

    } catch (err) {
        throw err;
    };
};
