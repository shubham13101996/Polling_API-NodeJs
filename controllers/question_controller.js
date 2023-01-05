const Question = require("../models/question");

module.exports.create = function(req,res){
    Question.create(
        {title : req.body.title,
        vote:false},
        function(err,question){
            if(err){
                return res.json(500,{
                    message : "Error in Creating Question",
                    data : err
                });
            }
            if(question){
                return res.json(200,{
                    message : "Question Created Successfully",
                    data:question
                });
            }else{
                return res.json(500,{
                    message : "Error in Creating Question"
            });
            }
        }
    );
};