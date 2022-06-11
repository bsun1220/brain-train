import React, {useState}from "react";
import styles from "./global.module.css";


export default function Login(props){

    const login = (
            <div className = {styles.loginfo}>
                <p style={{"fontStyle":"normal"}}>Username</p>
                <form>
                    <input type = "text"></input>
                </form>
                <p style={{marginTop:"30px", "fontStyle":"normal"}}>Password</p>
                <form>
                    <input type = "text"></input>
                </form>
                <div id = {styles.loginbutton}>
                    <button className = {styles.end_button} id = {styles.start}
                        >Submit</button>
                </div>
            </div>
    );

    const [setting, setSetting] = useState("login");

    const handleChange = (e) =>{
        setSetting(e.target.value);
    }
    
    return(
        <div className = {styles.game} id = {styles.login}>
            <h1>Login Information</h1>
            <p>Choose Setting</p>
            <hr id = {styles.loginline}/>
            <form className = {styles.radioCheck}>
                <div className = {styles.radiobuttons}>
                    <input type = "radio" name = "log" 
                        id = "login" value = "login" 
                        onChange = {handleChange}
                        checked = {setting === "login"}/>
                    <label for = "login">Login</label>
                </div>
                <div className = {styles.radiobuttons}>
                    <input type = "radio" name = "log" 
                        id = "Create" value = "create" 
                        onChange = {handleChange}
                        checked = {setting === "create"}/>
                    <label for = "Create">Create</label>
                </div>
            </form>
            {login}
        </div>);
}