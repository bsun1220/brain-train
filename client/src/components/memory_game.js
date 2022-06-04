import React from "react";
import Start from "./memory-start";
import Number from "./number";
import Score from "./memory-score.js";
import Submit from "./memory-submit";

export default function Memory(){
    
    const MAX_LEVEL = 80; 
    let start = <Start/>;
    return(
        <div>
            <Start/>
            <hr/>
            <Number num = {"4"} completed = {40}/>
            <hr/>
            <Submit/>
            <hr/>
            <Score actualNum = {"10293091230819231831920381092381029380192830192830192830918203918203918023981023"} guessNum = {"123"}/>
        </div>
    );
}