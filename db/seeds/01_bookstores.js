
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookstores').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookstores').insert([
        {id: 1, bookstore_name: 'Chapters'},
        {id: 2, bookstore_name: 'Indigo'},
      ]);
    });
};
