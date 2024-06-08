import { pool } from "../config/pgdb.js"

/**
 * 
 * @param {string} table 
 * @param {string} column 
 * @param {string} columnElem -> column type varchar
 * @returns 
 * ```
 * export const getOneVarchar = async (table, column, columnElem) => {
    try{

        const query = `SELECT * FROM ${table} WHERE ${column} = '${columnElem}';`
        const res = await pool.query(query);
        return res.rows

    }catch(err){
        throw err
    }
}
 * ```
 */
export const getOneVarchar = async (table, column, columnElem) => {
    try{

        const query = `SELECT * FROM ${table} WHERE ${column} = '${columnElem}';`
        const res = await pool.query(query);
        return res.rows

    }catch(err){
        throw err
    }
}

/**
 * 
 * @param {string} table 
 * @param {string} column 
 * @param {string} columnElem -> column type varchar
 * @returns 
 * 
 * ```
 * export const getOneInt = async (table, column, columnElem) => {
    try{

        const query = `SELECT * FROM ${table} WHERE ${column} = ${columnElem};`
        const res = await pool.query(query);
        return res.rows;

    }catch(err){
        throw err
    };
};
 * ```
 */
export const getOneInt = async (table, column, columnElem) => {
    try{

        const query = `SELECT * FROM ${table} WHERE ${column} = ${columnElem};`
        const res = await pool.query(query);
        return res.rows

    }catch(err){
        throw err
    }
}


/**
 * 
 * @param {string} table 
 * @returns 
 * 
 * ```
 * export const getAll = async (table) => {
    try{

        const query = `SELECT * FROM ${table}`
        const res = await pool.query(query);
        return res.rows

    }catch(err){
        throw err
    }
}
 * ```
 */
export const getAll = async (table) => {
    try{

        const query = `SELECT * FROM ${table}`
        const res = await pool.query(query);
        return res.rows

    }catch(err){
        throw err
    }
}

/**
 * 
 * @param {string} table 
 * @param {string} putTable 
 * @param {string} newelem 
 * @param {string} column 
 * @param {string} columnElem -> must be string
 * @returns 
 * 
 * 
 * ```
 * export const putOne = async (table, putTable, newelem, column, columnElem) => {
    try{
        console.log(table, putTable, newelem, column, columnElem);
        const query = `UPDATE ${table} SET ${putTable} = ${newelem} WHERE ${column} = '${columnElem}';`
        const res = await pool.query(query);
        return res.rows

    }catch(err){
        throw err
    }
}
```
 */
export const putOne = async (table, putTable, newelem, column, columnElem) => {
    try{

        const query = `UPDATE ${table} SET ${putTable} = ${newelem} WHERE ${column} = '${columnElem}';`
        const res = await pool.query(query);
        return res.rows

    }catch(err){
        throw err
    }
}


export const deleteOneVarchar = async (table, column, columnElem) => {
    try{

        const query = `DELETE FROM ${table} WHERE ${column} = '${columnElem}' RETURNING *;`
        const res = await pool.query(query);
        return res.rows

    }catch(err){
        throw err
    }
}

export const deleteOneInt = async (table, column, columnElem) => {
    try{

        const query = `DELETE FROM ${table} WHERE ${column} = ${columnElem} RETURNING *;`
        const res = await pool.query(query);
        return res.rows

    }catch(err){
        throw err
    }
}