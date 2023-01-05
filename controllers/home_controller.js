const Question = require("../models/question");
const Option = require("../models/option");

module.exports.home = async function(req,res){
    try {
        // finding all the question  and showing at the home 
        let question= await Question.find({}).populate(
            {
                path : "option"
            });
            if (question){
                return res.status(200).json({
                    message:"Here is ur question",
                    data:question
                });
            }else{
                return res.status(400).json({
                    message:"Question not exist"
                });
            }
    } catch (error) {
        return res.status(500).json({
            message : "Error From the Server",
            data : error
        });
    }
};