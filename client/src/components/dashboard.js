import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Info from "./info"
import styles from "./global.module.css";

export default function Dashboard(){

    return(
        <div>
        <div id = {styles.frontpage}>
            <img src = "brain.svg" alt = "brain" width = "150px"/>
            <h1>Brain Train</h1>
            <p>Master these games to improve your cognitive capabilities</p>
            <a   style = {{"textDecoration": "none"}} href ="#game-page" >
            <button className= {styles.end_button} id = {styles.start}> Start</button>
            </a>
            
        </div>
        <div id = {styles.middlepage}/>

        <div className = {styles.dashboard} id = "game-page">
            <Info img = "time-purple.svg" name = "TimeIt!" desc = "Click to survive" link = "/click"/>
            <Info img = "memory-purple.svg" name = "MemorizeIt!" desc = "Remember the numbers" link = "/memory"/>
            <Info img = "math-purple.svg" name = "MathIt!" desc = "Practice mental math" link = "/math"/>
        </div>
        </div>
    );
};