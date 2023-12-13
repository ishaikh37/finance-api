const express = require("express");
const router = express.Router();
const lenderController = require("../../controllers/lenders");

router.get("/init", lenderController.initLender);

module.exports = router;
