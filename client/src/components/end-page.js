import React from "react";
import styles from "./global.module.css";

export default function End_Page(props){

    const get_avg = () => Math.floor(props.data.reduce((a,b) => a + b, 0)/props.data.length);

    return(
        <div className = {styles.click_page} id = {styles.blue_page}> 

            <div background-color = "yellow">
                <div id = {styles.center}>
                    <img id = {styles.smiley} src = "smiley.png" width = "100px"/>
                </div>
                <h1> Your average was {get_avg()} ms!</h1>
            <div id = {styles.play_buttons}>
                <button className = {styles.end_button}> Save Data </button>
                <button className = {styles.end_button}> Play Again</button>
            </div>
            </div>
        </div>
    );
    

}