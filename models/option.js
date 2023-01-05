const mongoose =require("mongoose");

const optionSchema = new mongoose.Schema({
    id:{
        type: Number,
        required : true
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question",
        required:true
    },
    text:{
        type:String
    },
    votes:{
        type:Number
    },
    link:{
        type:String
    }
},

{
    timestamps:true
}
);

const Option = mongoose.model("Option",optionSchema);
module.exports = Option;