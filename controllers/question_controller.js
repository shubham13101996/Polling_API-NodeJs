const Question = require("../models/question");
const Option = require("../models/option");

// action for creating question 
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

// action for adding option 

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

// action to delete question and its option 
module.exports.delete = function(req,res){
    console.log(req.params.id);
    // finding question by id and delete it 
    Question.findByIdAndDelete(
        {_id:req.params.id},
        function(err,question){
            if(err){
                return res.json(500,{
                    message:"Error in Deleting the Question",
                    data:err
                });
            }
            return res.json(200,{
                message:"Question is Deleted Successfully "
            });
        }
        );
        // deleting associated option
        Option.deleteMany({question : req.params.id},
            function(err,option){
                if(err){
                    return res.json(500,{
                        message:"Error in Deleting the Option",
                        data:err
                    });
                }
                return res.json(200,{
                    message:"Options are Deleted Successfully"
                });
            });
}

// action to show all the question 
module.exports.ShowQuestions = async (req,res)=>{
    try {
        // finding all the question and showing 
        let question= await Question.findById(req.params.id).populate({
            path: "option"
        });
        if(question){
            return res.status(200).json({
                message:"Got the question successfully",
                data:question
            });
        }else{
            return res.status(400).json({
                message:"Question doesn't exist"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message:"Error From the Server",
            data: error
        });
    }
};