import { pool } from "../config/pgdb.js";


export const createOtpTable = async () => {

    try {
        const query = `
            CREATE TABLE IF NOT EXISTS otps (
                email VARCHAR(128),
                otp VARCHAR(6)
            );
        `;

        const info = pool.query(query, [], (err, result) => {
            if(err){
                throw err
            }
            console.log('OTP table yaratildi.');
        });

    } catch (err) {
        throw err;
    };
};
