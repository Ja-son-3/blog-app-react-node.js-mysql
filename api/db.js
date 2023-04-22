import mysql from "mysql"
import * as dotenv from 'dotenv'

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PW,
    database:"blog"
})