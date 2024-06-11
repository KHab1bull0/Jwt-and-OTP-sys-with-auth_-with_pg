import { pool } from "../config/pgdb.js"

/**
 * 
 * @param {string} table 
 * @param {string} column 
 * @param {string} columnElem -> column type varchar
 * @returns 
 */
export const getOneVarchar = async (table, column, columnElem) => {
    try {

        const query = `SELECT * FROM ${table} WHERE ${column} = '${columnElem}';`
        const res = await pool.query(query);
        return res.rows

    } catch (err) {
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
 */
export const getOneInt = async (table, column, columnElem) => {
    try {

        const query = `SELECT * FROM ${table} WHERE ${column} = ${columnElem};`
        const res = await pool.query(query);
        return res.rows

    } catch (err) {
        throw err
    }
}


/**
 * 
 * @param {string} table 
 * @returns 
 * 
 */
export const getAll = async (table) => {
    try {

        const query = `SELECT * FROM ${table}`
        const res = await pool.query(query);
        return res.rows

    } catch (err) {
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
 */
export const putOne = async (table, putTable, newelem, column, columnElem) => {
    try {

        const query = `UPDATE ${table} SET ${putTable} = ${newelem} WHERE ${column} = '${columnElem}';`
        const res = await pool.query(query);
        return res.rows

    } catch (err) {
        throw err
    }
}


export const deleteOneVarchar = async (table, column, columnElem) => {
    try {

        const query = `DELETE FROM ${table} WHERE ${column} = '${columnElem}' RETURNING *;`
        const res = await pool.query(query);
        return res.rows

    } catch (err) {
        throw err
    }
}

export const deleteOneInt = async (table, column, columnElem) => {
    try {

        const query = `DELETE FROM ${table} WHERE ${column} = ${columnElem} RETURNING *;`
        const res = await pool.query(query);
        return res.rows

    } catch (err) {
        throw err
    }
}

export const insertMany = async (table, columnArr, valueArr) => {
    try {
        /**
         * 
         * @param {object} > array
         * @returns {string} string
         */
        const replace = (arr) => {
            let str = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (i > 0) {
                    str += ", " + arr[i];
                };
            };

            return str
        };

        const genValue = (valueArr) => {

            const len = valueArr.length;
            let str = '$1'
            for(let i = 2; i <= len; i++){
                str += ', ' + `$${i}`;
            }
            return str
        }

        const column = replace(columnArr);
        const value = genValue(valueArr);

        const query = `INSERT INTO ${table} (${column}) values (${value}) RETURNING *;`
        const res = await pool.query(query, valueArr);
        return res.rows;

    } catch (err) {
        throw err
    }
}




