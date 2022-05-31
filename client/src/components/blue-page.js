import React, { useState, useEffect, useInsertionEffect } from "react";
import styles from "./global.module.css";

export default function Blue_Page(props){

    const report = props.correct ? 
            <h1 id = {styles.vertical_space}> Your reaction time was {props.time} ms</h1> : 
            <h1 id = {styles.vertical_space}> You clicked too soon! Try again.</h1>;

    return(
        <div className = {styles.click_page} id = {styles.blue_page}> 
        <div>
            {report}
            <p> Click for the next round!</p>
            </div>
         </div>
    );
    

}