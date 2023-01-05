const Question = require("../models/question");
const Option = require("../models/option");

// action for adding votes 
module.exports.addVote= function (req,res){
    Option.findById({_id:req.params.id},
        function(err,option){
            if(err){
                return res.json(500,{
                    message:"Error in Finding Option",
                    dara:err
                });
            }
            if(option){
                const currentVote = option.votes + 1 ;
                console.log('option.votes');
                Option.updateOne(
                    {_id:req.params.id},
                    {votes:currentVote},
                    function(err,UpdatedVote){
                        if(err){
                            return res.json(500,{
                                message : "Error in Updating Votes",
                                data:err
                            });
                        }
                        return res.json(200,{
                            message : "Option's Vote is Updated Successfully"
                        });
                    }
                );
                option.save();
            }

        });
};

// action for deleting option 
module.exports.deleteOption = function(req,res){
    Option.findById({_id:req.params.id},function(err,option){
        if(err){
            return res.json(500,{
                message:"Option Not Found"
            });
        }
        if(option){
          Option.findByIdAndDelete({_id:req.params.id},function(err,deleteOption){
            if(err){
                return res.json(500,{
                    message:"Error in Deleting the Option",
                    data:err
                });
            }
            return res.json(200,{
                message:"Option is Deleted Successfully"
            });

          });

        }
    });
};