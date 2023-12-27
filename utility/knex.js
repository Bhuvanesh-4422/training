import knex from 'knex';
import dotenv from "dotenv";

dotenv.config({path:'./.env'})

const db = knex({

    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port:5432
    },
    migrations:{
        tableName:'knex_m',
        directory:'./migrations',
    }
});
export default db;