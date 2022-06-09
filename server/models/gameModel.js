import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    gameId:{
        type:String
    },
    data:{
        type:[Number],
        default:[]
    }
});


const Game = mongoose.model("Game", GameSchema);

module.exports = {Game}