
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();

    tbl.string('username', 128).notNullable().unique().index();
    tbl.string('password', 128).notNullable();
    tbl.string('firstName', 128);
    tbl.string('lastName', 128);
    tbl.string('email', 256);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
