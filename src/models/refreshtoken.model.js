import { pool } from '../config/pgdb.js';

export const refreshDb = () => {
    try{
        const query = `
            CREATE TABLE IF NOT EXISTS refreshtoken(
                email VARCHAR(64) NOT NULL UNIQUE,
                token VARCHAR(256) NOT NULL
            );
        `
        const res = pool.query(query, [], (err, result) => {
            if(err){
                throw err
            }
            console.log("Refresh token db yaratildi...");
        });
        return res;
    } catch(err) {
        throw err;
    }
}