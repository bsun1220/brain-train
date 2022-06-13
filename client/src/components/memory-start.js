import React from "react";
import styles from "./global.module.css";

export default function Start({parentCall}){

    const start = "number";

    const handleClick = (e) => {
        e.preventDefault();
        parentCall(start);
    };

    return(
        <button className = {styles.game} onClick = {handleClick}>
        <div className = {styles.memorypage}>
            <div id = {styles.memoryrules}>
                <img src = "memory.svg" width = "100px" alt = "time"/>
                <h1>MemorizeIt!</h1>
                <p>Learn to remember long sequences of digits</p>
            </div>
        </div>

        </button>
    )
}