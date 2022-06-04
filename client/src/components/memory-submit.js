import React from "react";
import styles from "./global.module.css";

export default function Submit(){

    
    return(
        <div className = {styles.memorypage}>
            <p id = {styles.memorysubmit}>What is the number?</p>
            <p id = {styles.memorysubmitgray}>Press button to submit</p>
            <form className = {styles.form}>
                <input type = "text" className = {styles.formtext}/>
            </form>
            <button className = {styles.end_button} id = {styles.start}>Submit</button>
        </div>
    )
}