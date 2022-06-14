const express = require('express');
const Router = express.Router();
const Comment = require("../models/commentModel");

Router.get("/comment/:id", async(req, res) =>{
    const comments = await Comment.find({"gameId":req.params.id})
                                    .sort({"start":-1}) 
                                    .limit(10);
    try{
        res.send(comments);
    }
    catch(error){
        res.status(500).send(error);
    }
});

Router.post("/comment", async(req, res) =>{
    const comment = new Comment(req.body);
    try{
        await comment.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }
});

module.exports = Router;