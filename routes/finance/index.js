const express = require("express");
const router = express.Router();
const financeController = require("../../controllers/finance");

router.get("/options", financeController.financeOptions);
router.get("/financeCalculator", financeController.financeCalculator);

module.exports = router;
