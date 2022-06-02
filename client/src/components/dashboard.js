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
            <a   style = {{"text-decoration": "none"}} href ="#game-page" >
            <button className= {styles.end_button} id = {styles.start}> Start</button>
            </a>
            
        </div>
        <div id = {styles.middlepage}/>

        <div className = {styles.dashboard} id = "game-page">
            <Info img = "time-purple.svg" name = "TimeIt!" desc = "Click to survive!" link = "/click"/>
            <Info img = "time-purple.svg" name = "TimeIt!" desc = "Click to survive!" link = "/click"/>
            <Info img = "time-purple.svg" name = "TimeIt!" desc = "Click to survive!" link = "/click"/>
        </div>
        </div>
    );
};