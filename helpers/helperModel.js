const db = require('../data/dbConfig');

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask
}

// projects
function getProjects() {
    return db('projects');
}

// function findById(id) {
//     return db('projects')
//         .where({ id })
//         .first();
// }

function addProject(project) {
    return db('projects')
        .insert(project)
}

//resources
function getResources() {
    return db('resources');
}

// function findById(id) {
//     return db('resources')
//         .where({ id })
//         .first();
// }

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

//tasks
function getTasks() {
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('p.name as project_name', 'p.description as project_description', 't.project_id', 't.id', 't.description', 't.notes', 't.completed');
}

// function findById(id) {
//     return db('tasks')
//         .where({ id })
//         .first();
// }

function addTask(task) {
    return db('tasks')
        .insert(task)
}