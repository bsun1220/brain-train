import React, {useEffect, useState} from "react";
import styles from "./global.module.css";
import axios from "axios";
import Chart from "react-google-charts";

export default function LookUp(){

    const [userInput, setUserInput] = useState("");
    const [userData, setUserData] = useState("");

    const [charts, setChart] = useState("");

    const [error, setError] = useState("");

    const ref = {
        "game1":"ClickIt!",
        "game2":"MemorizeIt!",
        "game3":"MathIt!"
    };

    const transform = (arr) => {
        let new_arr = [];
        for(let i = 0; i < arr.length; i++){
            new_arr.push([arr[i]]);
        }
        return new_arr;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const request = await axios.get(`http://localhost:5000/user/${userInput}`);
        const data = request.data;
        
        if(request.data.length !== 1){
            setUserData("");
            setError("USER NOT FOUND");
        }
        else{
            setUserData(data[0]);
            setError("");
        }

        
    };

    useEffect(()=> {
        if(userData !== ""){

            const list = []; 
            list.push(<h1>Distribution Data</h1>);
            let total = 0; 
            ["game1","game2","game3"].forEach((game) => {
                const data = transform(userData[game]);
                total += data.length;
                const HistogramData = [[`${ref[game]}`], ...data];

                const chartOptions = {
                    title: `${ref[game]} Distribution`,
                    legend: { position: 'top', maxLines: 2 },
                    colors: ['#5D47C7'],
                    interpolateNulls: false,
                }

                list.push(<div id = {styles.chart}><Chart key = {game}
                    width={'300px'}
                    height={'240px'}
                    chartType="Histogram"
                    loader={<div>Loading Chart...</div>}
                    data={HistogramData}
                    options={chartOptions}
                  /></div>)
            });

            const date = userData["start"].substring(0,10);
            const name = userData["userName"];

            const p = <p>{name} started their journey on {date}, and they have played {total} games so far!</p>
            list.push(p);

            setChart(list);

        }
        else{
            setChart("");
        }
    },[userData])

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    return (<div>
        <h1 id = {styles.title}>User Lookup</h1>
        <hr id = {styles.break} style = {{"marginBottom":"35spx"}}/>
        <div id = {styles.lookupbutton}>
            <form onSubmit = {handleSubmit}>
                <input type = "text" spellCheck= {"false"} onChange = {handleChange} value = {userInput}/>
            </form>
            <button onClick = {handleSubmit} className = {styles.end_button} 
                    id = {styles.start}
                    >Find</button>
        </div>

        <div className = {styles.lookupchart}>
            {charts}
        </div>

        <p style = {{"textAlign":"center", "color":"red", "fontSize":"30px","marginTop":"20px"}}>{error}</p>
    </div>);
}