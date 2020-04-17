
exports.seed = function(knex) {
      return knex('resources').insert([
        { name: 'Books', description: 'hard-cover or soft' },
        { name: 'Computer', description: 'Desktop with a keyboard' },
        { name: 'Library' },
      ]);
};
