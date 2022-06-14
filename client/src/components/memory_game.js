import React, {useState, useReducer} from "react";
import Start from "./memory-start";
import Number from "./number";
import Score from "./memory-score.js";
import Submit from "./memory-submit";
import Max from "./memory-max";
import Login from "./login";
import Like from "./like";
import CommentSection from "./commentsection";

export default function Memory(){

    const createRandomNumber = (level) =>{
        let strseq = ""; 
        for(let i = 0; i < level; i++){
            const randomNum = Math.floor(Math.random() * 10);
            strseq += randomNum;
        }
        return strseq;
    }

    const [page, setPage] = useState("start");

    const [round, addRound] = useReducer(
        (number) => number + 1,
        1
    );

    const [num, changeNum] = useState(createRandomNumber(round));
    const [guess, updateGuess] = useState("-1");

    const changePage = (data) => {
        setPage(data);
    };

    const [final, setFinal] = useState(0);

    const ref = {
        "start":<Start parentCall = {changePage}/>,
        "number":<Number guessNum = {num} parentCall = {changePage}/>,
        "submit":<Submit parentCall = {changePage} updateGuess = {updateGuess}/>,
        "score":<Score 
            actualNum = {num} 
            guessNum = {guess}
            addRound = {addRound}
            changeNum = {changeNum}
            setPage = {setPage}
            createNum = {createRandomNumber}
            setFinal = {setFinal}
            />,
        "max":<Max/>,
        "login":<Login game = {"game2"} score = {final}/>
    }

    return (
        <div>
            {ref[[page]]}
            <Like game = {"game2"}/>
            <CommentSection game = {"game2"}/>
        </div>
    );
}