import { pool } from "../config/pgdb.js";


export const createCourseTable = () => {

    try {
        const query = `
            CREATE TABLE IF NOT EXISTS courses (
                id SERIAL PRIMARY KEY,
                title VARCHAR(32),
                description VARCHAR(32),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
            );
        `;

        const info = pool.query(query, [], (err, result) => {
            if(err){
                throw err
            }
            console.log('Courses table yaratildi.');
        });

    } catch (err) {
        throw err;
    };
};
