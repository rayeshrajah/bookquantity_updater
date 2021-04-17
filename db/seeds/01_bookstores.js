
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookstores').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookstores').insert([
        {bookstore_name: 'Chapters'},
        {bookstore_name: 'Indigo'},
      ]);
    });
};
