const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    gameId:{
        type:String,
        required:true
    },
    Like:{
        type:Number,
        default:0
    },
    Dislike:{
        type:Number,
        default:0
    }
});


const Like = mongoose.model("Like",LikeSchema);

module.exports = Like;