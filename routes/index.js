const express = require("express");
const router= express.Router();

console.log("router loaded successfully");

const homeController = require('../controllers/home_controller');
router.get("/", homeController.home);
router.use("/question",require("./question"));
router.use("/option",require("./option"));


module.exports = router;