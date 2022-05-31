import React, { useState, useEffect, useInsertionEffect } from "react";
import styles from "./global.module.css";

export default function Start_Page(){
    return(
        <div className = {styles.click_page} id = {styles.blue_page}> 
            <div className = {styles.rules}>
                <h1 id = {styles.vertical_space}>Here are the rules for the game!</h1>
                <p>Click when red turns green! Press here to start!</p>
            </div>
        </div>
    );
}