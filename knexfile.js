module.exports = {
    development: {
        client: "pg",
        connection: "postgres://localhost/onetohasmany",
        migrations: {
            directory: "./db/migrations"
        },
        seeds: {
            directory: "./db/seeds/dev"
        },
        useNullAsDefault: true
    },

    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        useNullAsDefault: true
    },
};
