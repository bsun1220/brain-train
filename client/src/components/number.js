import React from "react";
import styles from "./global.module.css";

export default function Number(props){

    const containerStyles = {
        height: 30,
        width: '125px',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 10
    }
    
    const fillerStyles = {
        height: '100%',
        width: `${props.completed}%`,
        backgroundColor: "white",
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return(
        <div className = {styles.memorypage}> 
            <div id = {styles.guessNum}>
                <h1>{props.num}</h1>
            </div>
            <div style = {containerStyles}>
                <div style = {fillerStyles}>
                <span style = {labelStyles}></span>
                </div>
            </div>
        
        </div>
    )
}