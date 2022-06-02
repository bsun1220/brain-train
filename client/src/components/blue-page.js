import React from "react";
import styles from "./global.module.css";

export default function BluePage(props){

    const report = props.correct ? 
            <h1 id = {styles.vertical_space}> Your reaction time was {props.time} ms</h1> : 
            <h1 id = {styles.vertical_space}> Too soon! Try again.</h1>;

    return(
        <div className = {styles.click_page} id = {styles.blue_page}> 
        <div>
            <img src = "speed.svg" width = "100px" alt = "time"/>
            {report}
            <p> Click for the next round!</p>
            </div>
         </div>
    );
    

}