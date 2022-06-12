import React, {useState} from "react";

import MathStart from "./math-start";
import MathRound from "./math-round";
import MathScore from "./math-score";
import Login from "./login";

export default function MathGame(){

    const [page, setPage] = useState("start");

    const [score, setScore] = useState(0);

    const ref = {
        "start":<MathStart parentCall = {setPage}/>,
        "round":<MathRound parentCall = {setPage} setScore = {setScore}/>,
        "score":<MathScore score = {score} setPage = {setPage}/>,
        "login":<Login game = {"game3"} score = {score}/>
    };

    return(
        <div>
            {ref[page]}
        </div>
    );
}