import pg from "pg";
import dotenv from 'dotenv';
dotenv.config()

const { Pool } = pg

export const pool = new Pool({
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBNAME
});

