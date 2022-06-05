import React, {useEffect, useReducer} from "react";
import styles from "./global.module.css";

export default function Number(props){
    
    const update_inc = 20/(7 * props.guessNum.length);
    
    const [time, reduceTime] = useReducer(
        (number) => number - update_inc,
        100
    );

    useEffect(() => {
        const timer = setTimeout(() =>{
            if(time <= 20){
                props.parentCall("submit");
            }
            else{
                reduceTime();
            }
        }, 25);
        return () => clearTimeout(timer);
    }, [time, props]);

    const containerStyles = {
        height: 30,
        width: '125px',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 10
    }
    
    const fillerStyles = {
        height: '100%',
        width: `${time}%`,
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
                <h1>{props.guessNum}</h1>
            </div>
            <div style = {containerStyles}>
                <div style = {fillerStyles}>
                <span style = {labelStyles}></span>
                </div>
            </div>
        
        </div>
    )
}