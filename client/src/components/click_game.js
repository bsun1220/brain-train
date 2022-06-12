import React, { useState, useEffect, useReducer} from "react";
import styles from "./global.module.css";
import GreenPage from "./green-page";
import RedPage from "./red-page"
import StartPage from "./start-page"
import BluePage from "./blue-page";
import EndPage from "./end-page";
import Login from "./login";

export default function Click(){

    const [outcome, setOutcome] = useState({
        "page":"start",
        "is_red": false,
        "greenStart":0
    })

    const get_avg = (arr) => Math.floor(arr.reduce((a,b) => a + b, 0)/arr.length);
    
    const [scores, setScore] = useState([]);
    const [round, addRound] = useReducer(
        (number) => number + 1,
        1
    );

    const ref = {
        "start":<StartPage />,
        "red":<RedPage/>,
        "blue":<BluePage/>,
        "score":<BluePage correct = {true} time = {scores.slice(-1)[0]}/>,
        "green":<GreenPage/>
    };

    const random_timer = () => Math.random() * 5000 + 2000;

    let current = outcome["page"];

    useEffect(() => {
        if(outcome["page"] === "red"){
            const timer = setTimeout(() =>{
                if(current === "red"){
                    setOutcome((val) =>{
                        return {...val,...{"page":"green", "is_red":false, greenStart:Date.now()}};
                    });
                }
            }, random_timer());
            return () => clearTimeout(timer);
        }
      }, [outcome, current]);

    const handleClick = (e) => {
        e.preventDefault();
        if(outcome["page"] === "start"){
            setOutcome((val) => {
                return {...val,...{"page":"red", "is_red":true}}
            });
        }
        if(outcome["page"] === "red"){
            setOutcome((val) => {
                return {...val,...{"page":"blue", "is_red":false}}
            });
        }
        if(outcome["page"] === "blue"){
            setOutcome((val) => {
                return {...val,...{"page":"red", "is_red":true}}
            });
        }
        if(outcome["page"] === "green"){
        
            setOutcome((val) => {
                return {...val,...{"page":"score", "is_red":false}}
            });
            setScore((oldArray) => [...oldArray, Date.now() - outcome["greenStart"]]);
        }

        if (outcome["page"] === "score"){
            setOutcome((val) => {
                return {...val,...{"page":"red", "is_red":true}}
            });
            addRound();
        }
    }

    const [endPage, setEnd] = useState("end");

    const endRef = {
        "end": <div className = {styles.game}><EndPage data = {scores} setEnd = {setEnd}/></div>,
        "login":<Login score = {get_avg(scores)} game = {"game1"}/>
    };

    if (round <= 5){
        return(
                <button className = {styles.game} onClick = {handleClick}>
                    {ref[outcome["page"]]}
                </button>)
    }
    else{
        return(
            <div>
                {endRef[endPage]}
            </div>
        )
    }

}