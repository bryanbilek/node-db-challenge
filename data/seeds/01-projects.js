
exports.seed = function(knex) {
      return knex('projects').insert([
        { name: 'Clean Desk', description: 'Wipe down the desk after', completed: false },
        { name: 'Make Copies', description: 'Copy some paper', completed: false },
        { name: 'Refill Stapler', description: 'Get new staples', completed: true },
        { name: 'Take Out Trash', description: 'Empty trash out', completed: true}
      ]);
};
