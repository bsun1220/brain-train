import React from "react";
import styles from "./global.module.css";

export default function MathScore(props){

    const handlePlayAgain = (e) =>{
        props.setPage("start");
    }


    return(
        <div className = {styles.mathpage}>
            <img src = "matheq.svg" width = "100px" alt = "math"/>
            <h1>Your score was {props.score}!</h1>
            <div id = {styles.play_buttons}>
                <button className = {styles.end_button}> Save Data </button>
                <a href = "/math">
                    <button className = {styles.end_button} onClick = {handlePlayAgain}> Play Again</button>
                </a>
            </div>
        </div>
    );
}