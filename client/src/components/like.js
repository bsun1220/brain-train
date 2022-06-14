import React, {useState, useEffect} from "react";
import styles from "./global.module.css";
import axios from "axios";

export default function Like(props){

    const [like, setLike] = useState("");
    const [prev, setPrev] = useState("");
    const [first, setFirst] = useState(true);


    const onChange = (e) => {
        setLike(e.target.value);
    };

    useEffect(()=>{
        const apiCall = async() => {
            if(like !== ""){
                await axios.put(`http://localhost:5000/like/${props.game}/${like}`)
                const opposite = like === "like" ? "dislike" : "like";
                if(!first){
                    await axios.put(`http://localhost:5000/dislike/${props.game}/${opposite}`)
                }
                setFirst(false);
            }
            const request = await axios.get(`http://localhost:5000/like/${props.game}`);
            const data = request.data[0];
            setNumLikes(data["Like"])
            setNumDislikes(data["Dislike"])
        }
        apiCall();
    },[like])

    const [numLikes, setNumLikes] = useState(0);
    const [numDislikes, setNumDislikes] = useState(0);

    return(
        <div className = {styles.likesection}>
            <form className = {styles.radioLike}>
                <div className = {styles.radiobuttonlike}>
                    <input type = "radio" name = "log" 
                        onChange = {onChange}
                        id = "like" value = "like" 
                        />
                    <label htmlFor = "like">Like</label>
                </div>
                
                <div className = {styles.radiobuttonlike}>
                    <input type = "radio" name = "log" 
                        onChange = {onChange}
                        id = "dislike" value = "dislike" 
                        />
                    <label htmlFor = "dislike">Dislike</label>
                </div>
            </form>
            <div style = {{"textAlign":"right", 
                    "fontWeight":"100", 
                    "fontSize":"20px",
                    "padding":"0px", 
                    "display": "flex", 
                    "flexDirection":"column",
                    "alignItems":"flex-end",
                    "justifyContent": 
                    "center"}}>
                <p style = {{"marginBottom":"2px"}}>{numLikes} likes</p>
                <p style = {{"marginTop":"2px"}}>{numDislikes} dislikes</p>
            </div>
        </div>
    )
}