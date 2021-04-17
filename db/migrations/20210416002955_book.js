
exports.up = function(knex) {
  return knex.schema
    .createTable('books', table => {
        table.increments();
        table.string('book_name', 100).notNullable();
        table.string('author', 100).notNullable();
        table.integer('stock_level').notNullable();
        table.integer('bookstore_id').references('id').inTable('bookstores').index();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('books');
};
