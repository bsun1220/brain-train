import React from "react";
import styles from "./global.module.css";

export default function Max(){
    const button = <div id = {styles.play_buttons}>
    <button className = {styles.end_button}> Save Data </button>
    <button className = {styles.end_button}> Play Again</button>

</div>;
    
    return(
        <div className = {styles.memorypage}>
            <h1 id ={styles.memLev}> You have reached the highest level!</h1>
            {button}
        </div>
        
    )
};