import React, {useState, useEffect} from "react";
import styles from "./global.module.css";
import axios from "axios";
import Comment from "./comment";

export default function CommentSection(props){

    const [writer, setWriter] = useState("");
    const [newComment, setNewComment] = useState("");
    const [commentData, setCommentData] = useState("");

    useEffect(()=>{
        const apicall = async() => {
            const request = await axios.get(`http://localhost:5000/comment/${props.game}`);
            const data = request.data;
            const list = [];
            data.forEach((comment) => {
                const writer = comment.writer;
                const content = comment.content;
                const time = comment.start.substring(0,10);
                list.push(
                    <Comment key = {Math.random()} comment = {content} writer = {writer} date = {time}/>
                )
            setCommentData(list);
            });
        }
        apicall();
    },[writer])

    const changeWriter = (e) =>{
        setWriter(e.target.value);
    }

    const changeNewComment = (e) => {
        setNewComment(e.target.value);
    }
    const onSubmit = async(e) =>{
        e.preventDefault();

        if(writer.replace(/\s/g,'')!== "" && newComment.replace(/\s/g,'')!== ""){
            const body = {
                "writer":writer,
                "content":newComment,
                "gameId":props.game
            };

            await axios.post(`http://localhost:5000/comment`, body);
            setWriter("");
            setNewComment("");
        }
    }

    return(<div className = {styles.commentsection}>
        <div>
            <div id = {styles.commentsubmit}>
                <h1>Comment Section</h1>
                <p>Be sure to share your thoughts below!</p>
                <form onSubmit = {onSubmit}>
                    <input type = {"text"} 
                        style = {{"width":"min(500px,30vw)"}}
                        onChange = {changeWriter}
                        placeholder = {"enter name"} 
                        value = {writer}/>
                    <textarea
                        onChange = {changeNewComment}
                        type = {"text"} 
                        style = {{"maxHeight":"200px","minHeight":"30px","lineHeight":"1", "width":"min(500px,30vw)"}}
                        placeholder = {"enter comment"} 
                        value = {newComment}/>
                    
                </form>
                <button className = {styles.end_button}  
                    onClick = {onSubmit}
                    id = {styles.start}
                    >Complete</button>
            </div>
            <div id = {styles.comments}>
                {commentData}
            </div>
        </div>
    </div>)
}