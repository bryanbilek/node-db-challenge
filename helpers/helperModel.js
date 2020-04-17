const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add
}

// projects
function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function add(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return findById(ids[0]);
        });
}

//resources
function find() {
    return db('resources');
}

function findById(id) {
    return db('resources')
        .where({ id })
        .first();
}

function add(project) {
    return db('resources')
        .insert(project)
        .then(ids => {
            return findById(ids[0]);
        });
}

//tasks
function find() {
    return db('tasks');
}

function findById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function add(project) {
    return db('tasks')
        .insert(project)
        .then(ids => {
            return findById(ids[0]);
        });
}