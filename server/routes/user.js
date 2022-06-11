const express = require('express');
const Router = express.Router();
const User = require("../models/userModel");


Router.get("/user", async(req, res) =>{
            const users = await User.find({});
            try{
                res.send(users);
            }
            catch(error){
                res.status(500).send(error);
            }
        });

Router.get("/user/:id", async(req, res) =>{
            const users = await User.find({"userName":req.params.id});
            try{
                res.send(users);
            }
            catch(error){
                res.status(500).send(error);
            }
        });

Router.post("/user", async(req, res) => {
                const user = new User(req.body);
                try{
                    await user.save();
                    res.send("Success");
                }
                catch (error){
                    res.status(500).send(error);
                }
            });

Router.put("/user", async(req,res) =>{
    const username = req.body.userName;
    const password = req.body.password;
    const score = req.body.score;
    const game = req.body.game;
    User.find({userName:username, password:password})
        .exec((err, user) => {
            if(err) return  res.status(400).send(err);
            if(user.length == 0){
                return res.send("User not found");
            }
            user[0][game].push(score);
            user[0].save();
            return res.send("Success");
        });
});

module.exports = Router;