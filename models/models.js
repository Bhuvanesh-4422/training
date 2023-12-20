import db from '../utlity/knex.js';

export const getUsers = async (id) => {
    if(id==null) {
        return db('users').select();
    }
    else{
        return db('users').where('id', id).select().first();
    }
};

export const insertUser = async (userData) => {
    return db('users').insert(userData).returning('*');
};

export const deleteUserById = async (id) => {
    return db('users').where('id', id).del().returning('*');
};

export const updateUserById = async (id, userData) => {
    return db('users').where('id', id).update(userData).returning('*');
};
