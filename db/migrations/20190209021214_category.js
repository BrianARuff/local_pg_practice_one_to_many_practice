exports.up = function(knex, Promise) {
    return knex.schema.createTable("category", t => {
        t.increments();
        t.timestamps(true, true);
        t.string("name")
            .unique()
            .notNullable();
        t.integer("user_id").references('id').inTable('users');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('category');
};
//