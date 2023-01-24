const express = require("express");
const router = express.Router();

const questionController = require("../controllers/question_controller");

// route to create question
router.post("/create", questionController.create);
// route for deleting the question
router.delete("/:id/delete", questionController.deleteQuestion);
// route for creating the option to particular question
router.post("/:id/options/create", questionController.addOptions);
// route for showing the selected question with its option
router.get("/:id", questionController.showAllQuestions);

module.exports = router;
