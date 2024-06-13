import pg from "pg";
import dotenv from 'dotenv';
dotenv.config()

const { Pool } = pg


const { DBHOST, DBNAME, DBPORT, DBPASSWORD, DBUSER } = process.env

export const pool = new Pool({
    user: DBUSER,
    password: DBPASSWORD,
    host: DBHOST,
    port: DBPORT,
    database: DBNAME
});

