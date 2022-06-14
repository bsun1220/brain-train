import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    writer:{
        type:String,
        maxlength:50,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    gameId:{
        type:String,
        required:true
    },
    start:{
        type:Date,
        default:Date.now
    }
});


const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;