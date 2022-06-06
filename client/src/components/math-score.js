import React from "react";
import styles from "./global.module.css";

export default function MathScore(props){
    return(
        <div className = {styles.mathpage}>
            <img src = "matheq.svg" width = "100px" alt = "math"/>
            <h1>Your score was {props.score}!</h1>
            <div id = {styles.play_buttons}>
                <button className = {styles.end_button}> Save Data </button>
                <button className = {styles.end_button}> Play Again</button>
            </div>
        </div>
    );
}