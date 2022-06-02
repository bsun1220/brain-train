import React from "react";
import styles from "./global.module.css";

export default function StartPage(){
    return(
        <div className = {styles.click_page} id = {styles.blue_page}> 
            <div className = {styles.rules}>
                <img src = "time.svg" width = "100px" alt = "time"/>
                <h1 id = {styles.vertical_space}>TimeIt!</h1>
                <p>This is a reaction time test to test your speedy quick senses</p>
            </div>
        </div>
    );
}