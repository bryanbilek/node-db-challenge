exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('name', 100).notNullable()
            tbl.text('description', 255)
            tbl.boolean('completed').defaultTo('false').notNullable()
        })

        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.text('description', 255).notNullable()
            tbl.text('notes', 100)
            tbl.boolean('completed').defaultTo('false').notNullable()
            tbl.integer('project_id').references('id').inTable('projects').unsigned().notNullable()
        })

         .createTable('resources', tbl => {
            tbl.increments()
            tbl.string('name', 100).notNullable().unique()
            tbl.text('description', 255)
        })

        .createTable('project_resources', tbl => {
            tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
            tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources')
            tbl.primary(['project_id', 'resource_id']);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
