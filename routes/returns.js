const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    if (!req.body.customerId) {
        res.status(400).send('Customer id is not provided')
    }
    if (!req.body.movieId) {
        res.status(400).send('movie id is not provided')
    }
  res.status(401).send("Unauthorized");
});

module.exports = router;
