const express = require("express");
const router = express.Router();
const { Rental } = require("../models/rentals");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  if (!req.body.customerId) {
    res.status(400).send("Customer id is not provided");
  }

  if (!req.body.movieId) {
    res.status(400).send("movie id is not provided");
  }

  const rental = await Rental.findOne({
    "customer._id": req.body.customerId,
    "movie._id": req.body.movieId
  });

  if (!rental) {
    return res.status(404).send("Rental not Found");
  }

  if (rental.dateReturned) {
    return res.status(400).send("return already processed");
  }

  return res.status(400).send();
});

module.exports = router;
