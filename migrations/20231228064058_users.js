// migrations/20211220123456_migration_name.js

export const up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('username').unique();
    });
};

export const down = function (knex) {
    return knex.schema.dropTable('users');
};
