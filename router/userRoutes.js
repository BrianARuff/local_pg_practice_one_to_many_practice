const express = require("express");
const router = express.Router();
const db = require("../knexConfig");

router.get("/users", (req, res) => {
    db.select("*")
        .from("users")
        .then(users => res.status(200).json(users))
        .catch(error => res.status(500).json(error));
});

module.exports = router;
