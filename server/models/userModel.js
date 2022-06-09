
/*
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName:{
        type:String,
        maxlength:50,
        required:"Enter Username"
    },
    game1:{
        type:[Number],
        default:[]
    },
    game2:{
        type:[Number],
        default:[]
    },
    game3:{
        type:[Number],
        default:[]
    },
    start:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;*/


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;