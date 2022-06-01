import React, { useState, useEffect, useReducer} from "react";
import styles from "./global.module.css";
import Green_Page from "./green-page";
import Red_Page from "./red-page"
import Start_Page from "./start-page"
import Blue_Page from "./blue-page";
import End_Page from "./end-page";

export default function Click(){

    const [outcome, setOutcome] = useState({
        "page":"start",
        is_red: false,
        "greenStart":0
    })
    
    const [scores, setScore] = useState([]);
    const [round, addRound] = useReducer(
        (number) => number + 1,
        1
    );

    const ref = {
        "start":<Start_Page />,
        "red":<Red_Page/>,
        "blue":<Blue_Page/>,
        "score":<Blue_Page correct = {true} time = {scores.slice(-1)[0]}/>,
        "green":<Green_Page/>
    };

    const random_timer = () => Math.random() * 5000 + 2000;

    let current = outcome["page"];

    useEffect(() => {
        if(outcome["page"] == "red"){
            const timer = setTimeout(() =>{
                if(current == "red"){
                    setOutcome((val) =>{
                        return {...val,...{"page":"green", is_red:false, greenStart:Date.now()}};
                    });
                    current = "green";
                }
            }, random_timer());
            return () => clearTimeout(timer);
        }
      }, [outcome["is_red"]]);

    const handleClick = (e) => {
        e.preventDefault();
        if(outcome["page"] == "start"){
            setOutcome((val) => {
                return {...val,... {"page":"red", is_red:true}}
            });
            current = "red";
        }
        if(outcome["page"] == "red"){
            setOutcome((val) => {
                return {...val,... {"page":"blue", is_red:false}}
            });
            current = "blue";
        }
        if(outcome["page"] == "blue"){
            setOutcome((val) => {
                return {...val,... {"page":"red", is_red:true}}
            });
            current = "red";
        }
        if(outcome["page"] == "green"){
        
            setOutcome((val) => {
                return {...val,... {"page":"score", is_red:false}}
            });
            setScore((oldArray) => [...oldArray, Date.now() - outcome["greenStart"]]);
            current = "blue";
        }

        if (outcome["page"] == "score"){
            setOutcome((val) => {
                return {...val,... {"page":"red", is_red:true}}
            });
            current = "red";
            addRound();
        }
    }


    if (round <= 5){
        return(
            <button className = {styles.reaction_game} onClick = {handleClick}>
                {ref[outcome["page"]]}
            </button>);
    }
    else{
        return(
            <div className = {styles.reaction_game}>
                <End_Page data = {scores}/>
            </div>
        )
    }

}