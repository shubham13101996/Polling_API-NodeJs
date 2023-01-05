const mongoose = require("mongoose");
const { stringify } = require("querystring");
const { boolean } = require("webidl-conversions");

const questionSchema = new mongoose.Schema({
    title:{
        type : String,
        required:true  
    },
    //  option's id array for better fetching
    option:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref : "Option"
        }
    ],
    vote:{
       type : Boolean
    }
},{
    timestamps : true
}
);




const Question = mongoose.model("Question",questionSchema);
module.exports = Question;
