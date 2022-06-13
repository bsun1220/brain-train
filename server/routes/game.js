const express = require('express');
const Router = express.Router();
const Game = require("../models/gameModel");

Router.get("/game/:id", async(req, res) =>{
    const games = await Game.find({"gameId":req.params.id});
    try{
        res.send(games);
    }
    catch(error){
        res.status(500).send(error);
    }
});

Router.get("/game", async(req, res) =>{
    const games = await Game.find({});
    try{
        res.send(games);
    }
    catch(error){
        res.status(500).send(error);
    }
});

Router.get("/leaderboard/:id", async(req,res)=> {
    const direction = req.params.id === "game1" ? 1 : -1;
    const games = await Game.find({"gameId":req.params.id})
                            .sort({"score":direction}) 
                            .limit(5);
    res.send(games);

});


Router.post("/game", async(req, res) =>{
    const game = new Game(req.body);
    try{
        await game.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }
});

module.exports = Router;