const express = require("express");
const Controller = require("../controller/controller");
const router = express.Router();

router.get("/", Controller.call)
router.get("/thank-you", Controller.thankYou)
router.post("/", Controller.getData);

module.exports = router;