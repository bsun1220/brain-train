import React from "react";
import styles from "./global.module.css";


export default function Score(props){

    const {actualNum, guessNum} = props;

    const correct = actualNum === guessNum;

    const level = actualNum.length;

    const corrStyle = correct ? styles.memoryCorrect : styles.memoryIncorrect;

    const handleLogin = (e) => {
        props.setFinal(level);
        props.setPage("login");
    }

    const playAgain = <div id = {styles.play_buttons}>
        <button className = {styles.end_button} onClick = {handleLogin}> Save Data </button>
        <a href = "/memory">
            <button className = {styles.end_button} onClick> Play Again</button>
        </a>
    </div>;


    const handleNext = (e) => {
        e.preventDefault();
        if(level === 80){
            props.setPage("max");
        }
        props.addRound();
        props.changeNum(()=>{
            return props.createNum(level + 1)
        });
        props.setPage("number");
    };

    const playNext = <div id = {styles.play_buttons}>
        <button 
            className = {styles.end_button} 
            id = {styles.start}
            onClick = {handleNext}
            >Next </button>
    </div>;

    const button = correct ? playNext : playAgain;

    return(
        <div className = {styles.memorypage}>
            <p id = {styles.memoryLevel}>Number</p>
            <p id = {styles.memoryCorrect}> {actualNum}</p>
            <p id = {styles.memoryLevel}>Your Number</p>
            <p id = {corrStyle}> {guessNum}</p>
            <h1 id ={styles.memLev}> Level {level}</h1>
            {button}
        </div>
    )
}