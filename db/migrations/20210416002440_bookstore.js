
exports.up = function(knex) {
    return knex.schema
    .createTable('bookstores', table => {
      table.increments('id').primary();
      table.string('bookstore_name', 255).notNullable();
      table.timestamps(true, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('bookstores');
};
