import { pool } from "../config/pgdb.js";


export const createUserTable = async () => {

    try {
        const query = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(128) UNIQUE NOT NULL,
                password VARCHAR(128) NOT NULL,
                role VARCHAR(128) DEFAULT 'User',
                status BOOLEAN DEFAULT false,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

        const info = pool.query(query, [], (err, result) => {
            if(err){
                throw err
            }
            console.log('User table yaratildi.');
        });

    } catch (err) {
        throw err;
    };
};
