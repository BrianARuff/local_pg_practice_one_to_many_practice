const express = require("express");
const router = express.Router();
const db = require("../knexConfig");

router.get("/categories", (req, res) => {
    db.select("*")
        .from("categories")
        .then(categories => res.status(200).json(categories))
        .catch(error => res.status(500).json(error));
});

//

module.exports = router;