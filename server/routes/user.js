const { response } = require('express');
const express = require('express');
const Router = express.Router();
const mongoose = require("mongoose");
const { User } = express("../models/userModel");


Router.route("/user")
        .get(async(req, res) =>{
            const users = await User.find({});
            try{
                res.send(users);
            }
            catch(error){
                res.status(500).send(error);
            }
        }

        );

Router.route("/add_user")
            .post(async(req, res) => {
                const user = new User(req.body);
                try{
                    await user.save();
                    res.send(user);
                }
                catch (error){
                    res.status(500).send(error);
                }
            });
module.exports = Router;