import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./global.module.css";
import axios from "axios";
import Card from "react-bootstrap/Card";

export default function LeaderCard(props){

    const [data, setData] = useState("loading");

    useEffect(()=> {
      const call = async() => {
        const request = await axios.get(`http://localhost:5000/leaderboard/${props.game}`);
        const list = request.data;
        const itemList = [];
        let i = 1;
        list.forEach((item) => {
          const element = <p key = {item["_id"]}><b>{i})</b>&nbsp;{item.user} - {item.score} Score  - {item.date.substring(0,4)}</p>;
          itemList.push(element)
          i = i + 1;
        })
        setData(<div style = {{"paddingInline":"30px"}}>{itemList}</div>);

      };
      call();
    },[props.game])

    return(
        <>
        <Card style={{ width: "20rem" }} id = {styles.leadercard}>
        <Card.Body id = {styles.leaderbody}>
         <img src = {props.img} alt = "logo" id = {styles.cardimg}/>
          <Card.Title  id = {styles.cardtitle}>{props.name}</Card.Title>
          <div id = {styles.body}>
            {data}
          </div>
        </Card.Body>
      </Card>
    </>
    );
    

}