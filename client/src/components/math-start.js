import React from "react";
import styles from "./global.module.css";

export default function MathStart(props){

    const handleClick = (e) =>{
        e.preventDefault();
        props.parentCall("round");
    }
    return(
        <button className = {styles.game} onClick = {handleClick}>
            <div className = {styles.mathpage}>
                <div>
                    <img src = "math.svg" width = "100px" alt = "math"/>
                    <h1>MathIt!</h1>
                    <p>Prepare for a quick mental math adventure</p>
                </div>
            </div>
        </button>
    )
}