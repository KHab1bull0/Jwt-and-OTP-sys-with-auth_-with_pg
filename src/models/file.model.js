import { pool } from "../config/pgdb.js";


export const createFileTable = async () => {

    try {
        const query = `
            CREATE TABLE IF NOT EXISTS files (
                id SERIAL PRIMARY KEY,
                fileUrl VARCHAR(32),
                filename VARCHAR(32),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
            );
        `;

        const info = pool.query(query, [], (err, result) => {
            if(err){
                throw err
            }
            console.log('File table yaratildi.');
        });

    } catch (err) {
        throw err;
    };
};
