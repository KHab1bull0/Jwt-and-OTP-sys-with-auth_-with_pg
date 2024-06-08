import { pool } from "../config/pgdb.js";
import { hashPassword } from "../utils/hash.js";

export const createUser = async (email, password, role) => {
    try{

        const query = 'INSERT INTO users(email, password, role) values ($1, $2, $3) RETURNING *;';
        const hashpass = await hashPassword(password);
        const res = await pool.query(query, [email, hashpass, role]);
        return res.rows

    }catch (err){
        throw err
    };
};

export const createOtp = async (email, otpnumber) => {
    try{

        const query = 'INSERT INTO otps (email, otp) values ($1, $2) RETURNING *;';

        const res = await pool.query(query, [email, otpnumber]);
        return res.rows

    } catch (err){
        throw err
    }
};

export const getUser = async (email) => {
    try{
        const query = 'SELECT * FROM users WHERE email = $1;';
        const values = [email]
        const res = await pool.query(query, values);
        console.log(res)
        return res.rows[0];

    } catch (err){
        throw err
    }
}

export const insertRefreshToken = async (email, token) => {
    try{
        const query = 'INSERT INTO refreshtoken(email, token) values ($1, $2) RETURNING *;';
        const values = [email, token]
        const res = await pool.query(query, values);
        return res.rows;

    } catch (err){
        throw err
    }
}

export const updateRefreshToken = async (email, token) => {
    try{
        const query = `UPDATE refreshtoken SET token = $1 WHERE email = $2;`;
        const values = [token, email];
        const res = await pool.query(query, values);
        return res.rows;
        
    } catch (err){
        throw err
    }
}

/**
 * Bu funksiya berilgan qiymatlar bo'yicha faqat bitta 
 * column yordamida qiymatlarni topib 
 * to'g'ri kelgan hamma qiymatlarni qaytarib beradi.
 * @param {string} table -> Qidirilayotgan jadval nomi.
 * @param {string} column -> Qidirilayotgan ustun nomi.
 * @param {string|number} elem -> Qidirilayotgan qiymat.
 * @returns {Promise<Object>} rows -> Qidirilayotgan yozuv, agar topilsa.
 * @throws {Error} -> Ma'lumotlar bazasiga so'rov yuborishda xatolik bo'lsa.
 * 
 * ```
 * console.log('hello');
 * ```
*/
export const univerGetFunc = async (table, column, elem) => {
    
    try{
        const query = `SELECT * FROM ${table} WHERE ${column} = $1;`;
        const values = [elem]
        const res = await pool.query(query, values);
        return res.rows[0];

    } catch (err){
        throw err
    }
}
