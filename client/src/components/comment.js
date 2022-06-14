import React from "react";
import styles from "./global.module.css"


export default function Comment(props){
    return(<div id = {styles.comment}>
        <div id = {styles.commentheading}>
            <p>{props.writer}</p>
            <p>{props.date}</p>
        </div>
        <hr/>
        <p id = {styles.commenttext}>{props.comment}</p>
        

    </div>)
}