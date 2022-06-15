const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName:{
        type:String,
        maxlength:50,
        required:"Enter Username"
    },
    password:{
      type:String,
      maxlength:50,
      required:true
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

module.exports = User;


