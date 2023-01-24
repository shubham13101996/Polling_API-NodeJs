const express = require("express");
const router = express.Router();

console.log("router loaded successfully");

const homeController = require("../controllers/home_controller");

router.get("/", homeController.front);
// question related route's path
router.use("/question", require("./question"));
// option related route's path
router.use("/option", require("./option"));

module.exports = router;
