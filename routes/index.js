const express = require("express");
const router= express.Router();

console.log("router loaded successfully");

const homeController = require('../controllers/home_controller');
router.get("/", homeController.home);
// connecting main route to the question related routes 
router.use("/question",require("./question"));

// connecting main route to the question related routes 
router.use("/option",require("./option"));


module.exports = router;