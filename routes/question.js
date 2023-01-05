const express = require("express");
const router = express.Router();


const questionController = require("../controllers/question_controller");

// routes for question action 

router.post("/create",questionController.create);
router.post("/options/create/:id",questionController.addOption);
router.get("/delete/:id",questionController.delete);
router.get("/:id",questionController.ShowQuestions);

module.exports = router;