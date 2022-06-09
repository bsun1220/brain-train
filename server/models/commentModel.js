import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    writer:{
        type:String,
        maxlength:50,
        required:"Enter Username"
    },
    postId:{
        type:String
    },
    content:{
        type:String
    },
    start:{
        type:Date,
        default:Date.now
    }
});


const Comment = mongoose.model("Comment", CommentSchema);


module.exports = {
    Comment
}