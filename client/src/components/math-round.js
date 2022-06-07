import React, {useEffect, useReducer, useState} from "react";
import styles from "./global.module.css";

export default function MathRound(props){

    const [score, addScore] = useReducer(
        (number) => number + 1, -1
    );

    const [guess, setGuess] = useState("0");

    const [time, decrementTime] = useReducer(
        (number) => number - 1, 120
    );

    const [answer, changeAnswer] = useState("0");

    const [eq, changeEq] = useState(["0", "x", "0"])

    const randomAddSub = () => {
        const num1 = Math.floor(Math.random() * 98) + 2;
        const num2 = Math.floor(Math.random() * 98) + 2;
        const num3 = num1 + num2;
        return [num1, num2, num3];
    }

    const randomMulDiv = () => {
        const num1 = Math.floor(Math.random() * 10) + 2; 
        const num2 = Math.floor(Math.random() * 98) + 2;
        const num3 = num1 * num2;
        return [num1, num2, num3];
    }

    const randomCalc = () => {
        if(Math.random() > 0.5){
            const seq = randomAddSub();
            if(Math.random() > 0.5){
                const equation = [seq[0].toString(), "+", seq[1].toString()];
                changeEq(equation);
                changeAnswer(seq[2].toString());
            }
            else{
                const equation = [seq[2].toString(), "-", seq[1].toString()];
                changeEq(equation);
                changeAnswer(seq[0].toString());
            }
        }
        else{
            const seq = randomMulDiv();
            if(Math.random() > 0.5){
                const equation = [seq[0].toString(), "x", seq[1].toString()];
                changeEq(equation);
                changeAnswer(seq[2].toString());
            }
            else{
                const equation = [seq[2].toString(), <>&divide;</>, seq[0].toString()];
                changeEq(equation);
                changeAnswer(seq[1].toString());
            }
        }
    }

    useEffect(() =>{
        const timer = setTimeout(() => {
            if(time <= 0){
                props.setScore(score);
                props.parentCall("score");
            }
            else{
                decrementTime();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [time]);

    useEffect(() => {
        if(guess === answer){
            addScore();
            randomCalc();
            setGuess("");
        }
    }, [guess, answer]);

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    return(
        <div className = {styles.mathpage} id = {styles.mathround}>
            <div id = {styles.mathheader}>
                <p>{time}</p>
                <p>Score is {score}</p>
            </div>
            <div id = {styles.matheq}>
                <div id = {styles.stripe}>
                    <p id = {styles.mathtxt}>
                        {eq[0]} {eq[1]} {eq[2]}
                    </p>
                    <form id = {styles.mathform} onSubmit = {handleSubmit} autoComplete="off">
                        <input id = {styles.mathformtxt} value = {guess} type = "text" onChange = {handleChange}>

                        </input>
                    </form>
                </div>
            </div>
        </div>
    )
}