import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    gameId:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    score:{
        type: Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});


const Game = mongoose.model("Game", GameSchema);

module.exports = Game;