import React, {useState, useReducer} from "react";

import MathStart from "./math-start";
import MathRound from "./math-round";
import MathScore from "./math-score";

export default function MathGame(){

    const [page, setPage] = useState("start");

    const ref = {
        "start":<MathStart parentCall = {setPage}/>,
        "round":<MathRound parentCall = {setPage}/>,
        "score":<MathScore/>
    };

    return(
        <div>
            {ref[page]}
        </div>
    );
}