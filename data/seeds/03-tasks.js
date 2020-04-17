
exports.seed = function(knex) {
      return knex('tasks').insert([
       { description: 'Feed dog', notes: 'give food to dog', project_id: 1 },
       { description: 'Make breakfast', notes: 'Get pan hot, get food', project_id: 1 },
       { description: 'Wash clothes', notes: 'In washer with soap', project_id: 2 },
      ]);
};
