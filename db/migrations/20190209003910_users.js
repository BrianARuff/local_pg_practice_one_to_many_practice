
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
      t.increments();
      t.string('username', 128).unique().notNullable();
      t.jsonb('roles').defaultTo(JSON.stringify(['member']))
      t.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
