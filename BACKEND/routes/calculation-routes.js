const express = require("express");
const router = express.Router();

//Import contrllers
const calculationController = require("../controllers/calculation-controller");

//HTTP Rotues
router.post("/", calculationController.calculateAmount);

module.exports = router;