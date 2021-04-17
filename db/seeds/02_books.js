
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {book_name: "1984", author: "George Orwell" , stock_level: 1, bookstore_id: 1},
        {book_name: "Witcher: Lady of the Lake" , author: "Andrzej Sapkowski" , stock_level: 2, bookstore_id: 2},
        {book_name: "Darktown", author: "Tomas Mullen" , stock_level: 2, bookstore_id: 1}
      ]);
    });
};
