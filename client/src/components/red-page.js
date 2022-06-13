import React, {useEffect} from "react";
import styles from "./global.module.css";

export default function RedPage(props){


    useEffect(()=> {
        const time = Math.random() * 5000 + 2000;
        const timer = setTimeout(()=> {
            props.setPage("green");
        }, time);
        return () => clearTimeout(timer);
    },[props])

    const handleClick = (e) => {
        e.preventDefault();
        props.setPage("fail");
    }

    return(
        <button className = {styles.game} onMouseDown = {handleClick}>
        <div className = {styles.click_page} id = {styles.red_page}> 
            <div className = {styles.rules}>
                <img src = "game.svg" width = "100px" alt = "time"/>
                <h1 id = {styles.big_text}>Wait for Green!</h1>
            </div>
        </div>
        </button>
    );
}