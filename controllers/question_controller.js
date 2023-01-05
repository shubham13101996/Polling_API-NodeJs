const Question = require("../models/question");
const Option = require("../models/option");

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


module.exports.addOption= function(req,res){
    Question.findById({_id:req.param.id},function(err,question){
        if(err){
            return res.json(500,{
                message:"Question Not Found",
                data : err
            });
        }
        if(question){
            const id = question.option.length + 1;
            Option.create(
                {
                    id:question.option.length + 1,
                    question:req.params.id,
                    text:req.body.text,
                    votes:0,
                    link:`http://localhost:8000/options/${id}/add_vote`

                },
                function(err,optionCreate){
                    if(err){
                        return res.json(500,{
                            message : "Error in creating option",
                            data : err
                        });
                    }
                    Question.update(
                        {_id:req.params.id},
                        {
                            $pull:{option : [optionCreate._id]}
                        },
                        function(err,QuestionOption){
                            if(err){
                                return res.json(500,{
                                    message:"Error in updating Question",
                                    data : err
                                });
                            }
                            return res.json(200,{
                                message: "Question and Option is Updated Successfully"
                            });
                        }
                    );
                    question.save();
                }
            );
        }else{
            return res.json(404,{
                message:"SomeThing Went Wrong",
                data: err
            });
        }
    });
};