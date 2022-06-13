import React from "react";
import styles from "./global.module.css";
import LeaderCard from "./leadercard";

export default function LeaderBoard(){
    return (<div>
        <h1 id = {styles.title}>Leaderboard</h1>
        <hr id = {styles.break}/>
        <div className = {styles.topgame}>
            <LeaderCard img = "time-purple.svg" name = "TimeIt!" game = {"game1"}/>
            <LeaderCard img = "memory-purple.svg" name = "MemorizeIt!" game = {"game2"}/>
            <LeaderCard img = "math-purple.svg" name = "MathIt!" game = {"game3"}/>

        </div>
    </div>);
}