import React from "react";
import styles from "./global.module.css";

export default function MathRound(props){

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(e.target.value == "hello"){
            props.parentCall("start");
        }
    }
    return(
        <div className = {styles.mathpage} id = {styles.mathround}>
            <div id = {styles.mathheader}>
                <p>hello</p>
                <p> goodbye</p>
            </div>
            <div id = {styles.matheq}>
                <div id = {styles.stripe}>
                    <p id = {styles.mathtxt}>
                        hello
                    </p>
                    <form id = {styles.mathform} onSubmit = {handleSubmit}>
                        <input id = {styles.mathformtxt} type = "text">

                        </input>
                    </form>
                </div>
            </div>
        </div>
    )
}