import React, {useState, useEffect}from "react";
import styles from "./global.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Login(props){

    const [setting, setSetting] = useState("login");

    const [done, setDone] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setSetting(e.target.value);
    }
    
    const [user, setUser] = useState("");
    const handleUser = (e) => {
        setUser(e.target.value.replace(/\s+/g, ''));
    };

    const [password, setPassword] = useState("");
    const handlePass = (e) => {
        setPassword(e.target.value.replace(/\s+/g, ''));
    };

    const [errorMessage, setError] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(user !== "" && password !== ""){
            if(setting === "create"){
                const existing = await axios.get(`http://localhost:5000/user/${user}`);
                if(existing.data.length !== 0){
                    setError("User Already Exists");
                }
                else{
                    const body = {
                        "userName":user,
                        "password":password
                    };
                    body[props.game] = [props.score];
                    await axios.post("http://localhost:5000/user",body);
                    setDone(true);
                }
            }
            else if (setting == "login"){
                const body = {
                    "userName":user,
                    "password":password,
                    "score":props.score,
                    "game":props.game
                };
                await axios.put("http://localhost:5000/user",body).then((response) => {
                        if(response.data == "User not found"){
                            setError("Incorrect User/Password");
                        }
                        else{
                            setDone(true);
                        }
                    });
            }
        }
    }

    useEffect(()=> {
        const func = async() => {
            if(done){
                const body = {
                    "user":user,
                    "score":props.score,
                    "gameId":props.game
                }
                await axios.post("http://localhost:5000/game", body)
                    .then((response) => {console.log(response)});
                navigate("/");
            }
        }
        func();
    },[done])
    


    return(
        <div className = {styles.lgame} id = {styles.login}>
            <h1>Login Information</h1>
            <p>Choose Setting</p>
            <hr id = {styles.loginline}/>
            <form className = {styles.radioCheck} onSubmit = {handleSubmit}>
                <div className = {styles.radiobuttons}>
                    <input type = "radio" name = "log" 
                        id = "login" value = "login" 
                        onChange = {handleChange}
                        checked = {setting === "login"}/>
                    <label htmlFor = "login">Login</label>
                </div>
                <div className = {styles.radiobuttons}>
                    <input type = "radio" name = "log" 
                        id = "Create" value = "create" 
                        onChange = {handleChange}
                        checked = {setting === "create"}/>
                    <label htmlFor = "Create">Create</label>
                </div>
            </form>
            <div className = {styles.loginfo}>
                <p style={{"fontStyle":"normal"}}>Username</p>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" onChange = {handleUser} value = {user}></input>
                </form>
                <p style={{marginTop:"30px", "fontStyle":"normal"}}>Password</p>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" onChange = {handlePass} value = {password}></input>
                </form>
                <div id = {styles.loginbutton}>
                    <button onClick = {handleSubmit} className = {styles.end_button} id = {styles.start}
                        >Submit</button>
                </div>
            </div>
            <div style = {{fontSize: "30px", marginTop:"30px", color:"red"}}>
                {errorMessage}
            </div>
        </div>);
}