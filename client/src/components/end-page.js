import React from "react";
import styles from "./global.module.css";
import { useNavigate } from "react-router";

export default function EndPage(props){

    const mean = Math.floor(props.data.reduce((a,b) => a + b, 0)/props.data.length);

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        props.setFinal(mean);
        props.setPage("login");
    }

    const handlePlay = () => {
        navigate("/click");
    }

    return(
        <div className = {styles.game}>

        <div className = {styles.click_page} id = {styles.blue_page}> 
            <div background-color = "yellow">
                <div id = {styles.center}>
                    <img id = {styles.smiley} src = "smiley.png" width = "100px" alt = "smiley"/>
                </div>
                <h1> Your average was {mean} ms!</h1>
            <div id = {styles.play_buttons}>
                <a>
                    <button className = {styles.end_button} onClick = {handleClick}> Save Data </button>
                </a>
                <a href = "/click">
                    <button className = {styles.end_button} onClick = {handlePlay}> Play Again</button>
                </a>
            </div>
            </div>
        </div>
        </div>
    );
    

}