import React from "react";
import styles from "./global.module.css"
import LeaderBoard from "./leaderboard";
import LookUp from "./lookup";

export default function Stat() {
    return (<div className = {styles.lgame} 
        style = {{"backgroundColor":"#f2aeb1", "color":"rgb(70, 70, 80)", "paddingTop":"5vh", "paddingBottom":"5vh"}}>
        <LeaderBoard/>
        <LookUp/>
    </div>);
}