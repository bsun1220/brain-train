import React, {useState} from "react";

import MathStart from "./math-start";
import MathRound from "./math-round";
import MathScore from "./math-score";

export default function MathGame(){

    const [page, setPage] = useState("start");

    const [score, setScore] = useState(0);

    const ref = {
        "start":<MathStart parentCall = {setPage}/>,
        "round":<MathRound parentCall = {setPage} setScore = {setScore}/>,
        "score":<MathScore score = {score}/>
    };

    return(
        <div>
            {ref[page]}
        </div>
    );
}