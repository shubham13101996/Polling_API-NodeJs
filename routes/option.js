const express = require("express");
const router = express.Router();

const optionController = require("../controllers/option_controller");

router.post("/:id/add_vote",optionController.addVote);
router.get("/delete/:id",optionController.deleteOption);
module.exports=router;