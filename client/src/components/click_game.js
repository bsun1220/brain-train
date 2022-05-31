import React, { useState, useEffect, useInsertionEffect } from "react";
import styles from "./global.module.css";
import Green_Page from "./green-page";
import Red_Page from "./red-page"
import Start_Page from "./start-page"
import Blue_Page from "./blue-page";
import End_Page from "./end-page";

export default function Click(){

    return(
        <button className = {styles.reaction_game}>
            <Green_Page/>
            <Red_Page/>
            <Start_Page/>
            <Blue_Page correct = {false} time = {1232}/>
        </button>
       
       
       /*<div className = {styles.reaction_game}>
        <End_Page avg = {123}/>
       </div>*/
    )

}