const express = require('express');
const Router = express.Router();
const mongoose = require("mongoose");
const { Game } = express("../models/gameModel");

Router.get("/game/id", async(req, res) =>{
    const games = await Game.find({"gameID":req.params.id});
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