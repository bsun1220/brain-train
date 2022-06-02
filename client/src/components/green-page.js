import React from "react";
import styles from "./global.module.css";

export default function GreenPage(){
    return(

        <div className = {styles.click_page} id = {styles.green_page}> 
            <div className = {styles.rules}>
                <img src = "game.svg" width = "100px" alt = "time"/>
                <h1 id = {styles.big_text}>Click Me!</h1>
            </div>
        </div>
    
    );
}