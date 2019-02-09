exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("users")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("users").insert([
                { username: "brff19", roles: JSON.stringify(["admin", "member"]) },
                { username: "lataylor1955", roles: JSON.stringify(["member"]) }
            ]);
        });
};
