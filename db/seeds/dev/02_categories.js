exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("category")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("category").insert([
                { name: "basketball", user_id: 1 },
                { name: "baseball", user_id: 1 },
                { name: "football", user_id: 1 },
                { name: "hockey", user_id: 2 },
                { name: "rugby", user_id: 2 }
            ]);
        });
};
