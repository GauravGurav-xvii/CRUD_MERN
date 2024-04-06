import mysql , { createConnection }from 'mysql';

export const db = createConnection({
    host:"localhost",
    user:"root",
    password: "gaurav7215",
    database:"blog",
});