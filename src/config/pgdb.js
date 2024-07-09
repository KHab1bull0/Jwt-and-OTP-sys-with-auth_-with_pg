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

// postgresql://texno_ark_owner:OajTpcL6o2fx@ep-lingering-band-a1mfumhm.ap-southeast-1.aws.neon.tech/texno_ark?sslmode=require


