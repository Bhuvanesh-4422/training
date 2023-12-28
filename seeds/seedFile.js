// src/seeds/seedFile.js
export const seed = function (knex) {
    return knex('users').del()
        .then(function () {
            return knex('users').insert([
                { name: 'ram', email: 'ram@mail.com',username:'ram1' },
                { name: 'ravi', email: 'ravi@mail.com',username:'ravi1' },
                { name: 'rahul', email: 'rahul@mail.com',username:'rahul1' },
                { name: 'rao', email: 'rao@mail.com',username:'rao1' },
            ]);
        });
};
