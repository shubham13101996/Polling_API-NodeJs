const exp = require("constants");
const express = require("express");
const router = express.Router();

const optionController = require("../controllers/option_controller");
// route to add vote to option
router.post("/:id/add_vote", optionController.addVote);
// route to delete the option
router.delete("/:id/delete", optionController.deleteOption);

module.exports = router;
