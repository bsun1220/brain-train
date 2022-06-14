const express = require('express');
const Router = express.Router();

const Like = require("../models/likeModel");

Router.get("/like/:id", async(req, res) =>{
    const like = await Like.find({"gameId":req.params.id});
    try{
        res.send(like);
    }
    catch(error){
        res.status(500).send(error);
    }
});

Router.post("/like", async(req, res) =>{
    const like = new Like(req.body);
    try{
        await like.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }
});

Router.put("/like/:id/:type", async(req, res) =>{
    const gameId = req.params.id;
    const type = req.params.type;
  
    Like.find({gameId:gameId})
        .exec((err, like) => {
            if(err) return res.status(400).send(err);
            if(type === "like"){
                like[0]["Like"] = like[0]["Like"] + 1;
                like[0].save();
                return res.send("Success");
            }
            else if (type === "dislike"){
                like[0]["Dislike"] = like[0]["Dislike"] + 1;
                like[0].save();
                return res.send("Success");
            }
        })
});

Router.put("/dislike/:id/:type", async(req, res) =>{
    const gameId = req.params.id;
    const type = req.params.type;
  
    Like.find({gameId:gameId})
        .exec((err, like) => {
            if(err) return res.status(400).send(err);
            if(type === "like"){
                like[0]["Like"] = like[0]["Like"] - 1;
                like[0].save();
                return res.send("Success");
            }
            else if (type === "dislike"){
                like[0]["Dislike"] = like[0]["Dislike"] - 1;
                like[0].save();
                return res.send("Success");
            }
        })
});

module.exports = Router;