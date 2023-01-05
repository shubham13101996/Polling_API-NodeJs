const express = require("express");
const router = express.Router();

const optionController = require("../controllers/option_controller");

//routes for option action

router.post("/add_vote/:id",optionController.addVote);
router.get("/delete/:id",optionController.deleteOption);

module.exports = router ;