import React from "react";
import Start from "./memory-start";
import Number from "./number";
import Score from "./memory-score.js";
import Submit from "./memory-submit";

export default function Memory(){

    
    return(
        <div>
            <Start/>
            <hr/>
            <Number num = {"1"} completed = {40}/>
            <hr/>
            <Submit/>
            <hr/>
            <Score level = {4} actualNum = {3} guessNum = {4}/>
        </div>
    );
}