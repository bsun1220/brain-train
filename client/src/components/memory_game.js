import React, {useEffect, useState} from "react";
import Start from "./memory-start";
import Number from "./number";
import Score from "./memory-score.js";
import Submit from "./memory-submit";

export default function Memory(){

    const [start , setStart] = useState(true);

    const changeStart = (data) => {
        setStart(data);
    };

    return (
        <div>
            {start && <Start parentCall = {changeStart}/>}
        </div>
    );
}