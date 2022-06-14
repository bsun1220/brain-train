import React, { useState} from "react";
import GreenPage from "./green-page";
import RedPage from "./red-page"
import StartPage from "./start-page"
import BluePage from "./blue-page";
import EndPage from "./end-page";
import Login from "./login";
import CommentSection from "./commentsection";
import Like from "./like";

export default function Click(){

    const [page, setPage] = useState("start");

    const [score, setScore] = useState([]);

    const [final, setFinal] = useState(0);

    const ref = {
        "start":<StartPage setPage = {setPage}/>,
        "red":<RedPage setPage = {setPage}/>,
        "fail":<BluePage setPage = {setPage} correct = {false}/>,
        "green":<GreenPage setPage = {setPage} setScore = {setScore}/>,
        "blue":<BluePage setPage = {setPage} correct = {true} score = {score}/>,
        "end":<EndPage data = {score} setFinal = {setFinal} setPage = {setPage}/>,
        "login":<Login game = {"game1"} score = {final}/>,
    }

    return(<div>
        {ref[page]}
        <Like game = {"game1"}/>
        <CommentSection game = {"game1"}/>
    </div>)
}

