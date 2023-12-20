import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'Bk@4422',
        database: 'new',
        port:5432
    },
});
export default db;