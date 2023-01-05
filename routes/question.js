const express = require("express");
const router = express.Router();


const questionController = require("../controllers/question_controller");

router.post("/create",questionController.create);
router.post("/options/create/:id",questionController.addOption);
router.get("/delete/:id",questionController.delete)
module.exports = router;