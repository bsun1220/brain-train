import React, {useState} from "react";
import styles from "./global.module.css";

export default function GreenPage(props){

    const [time] = useState(Date.now());

    const handleClick = () => {
        const now = Date.now();
        const score = Math.round(now - time);
        props.setScore((arr) => [...arr, score]);
        props.setPage("blue");
    }

    return(
        <button className = {styles.game} onMouseDown = {handleClick}>
        <div className = {styles.click_page} id = {styles.green_page}> 
            <div className = {styles.rules}>
                <img src = "game.svg" width = "100px" alt = "time"/>
                <h1 id = {styles.big_text}>Click Me!</h1>
            </div>
        </div>
        </button>
    );
}