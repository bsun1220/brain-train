import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./global.module.css";

import Card from "react-bootstrap/Card";

/*
    Props:
        1) pic/logo
        2) description
        3) game title
*/

export default function Info(props){

    return(
        <>
        <Card style={{ width: "20rem" }} id = {styles.card}>
        <a href= {props.link} style = {{"textDecoration": "none"}}>
        <Card.Body id = {styles.cardbody}>
         <img src = {props.img} alt = "logo" id = {styles.cardimg}/>
          <Card.Title  id = {styles.cardtitle}>{props.name}</Card.Title>
          <Card.Text id = {styles.body}>
              {props.desc}
          </Card.Text>
        </Card.Body>
        </a>
      </Card>
    </>
    );
    

}