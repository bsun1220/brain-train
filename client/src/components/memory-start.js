import React from "react";
import styles from "./global.module.css";

export default function Start(){
    return(
        <div className = {styles.memorypage}>
            <div id = {styles.memoryrules}>
                <img src = "memory.svg" width = "100px" alt = "time"/>
                <h1>MemorizeIt!</h1>
                <p>Learn to remember long sequences of digits</p>
            </div>
        </div>
    )
}