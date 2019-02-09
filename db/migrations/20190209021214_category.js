exports.up = function(knex, Promise) {
    return knex.schema.createTable("category", t => {
        t.increments();
        t.timestamps(true, true);
        t.string("name")
            .unique()
            .notNullable();
        t.integer("user_id").unsigned();
        t.foreign("user_id").references("users.id").onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('category');
};
