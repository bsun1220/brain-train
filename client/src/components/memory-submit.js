import React, {useState} from "react";
import styles from "./global.module.css";

export default function Submit(props){
    

    const [input, updateInput] = useState("");

    const handleSubmit = (e) => {
        const updated = input.replace(/\s/g, '');
        props.updateGuess(updated);
        props.parentCall("score");
    };

    return(
        <div className = {styles.memorypage}>
            <p id = {styles.memorysubmit}>What is the number?</p>
            <p id = {styles.memorysubmitgray}>Press button to submit</p>
            <form className = {styles.form} onSubmit = {handleSubmit}>
                <input type = "text" 
                    className = {styles.formtext} 
                    onChange = {(e) => updateInput(e.target.value)}/>
            </form>
            <button className = {styles.end_button} 
                    id = {styles.start}
                    onClick = {handleSubmit}
                    >Submit</button>
        </div>
    )
}