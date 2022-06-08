import React from "react";
import styles from "./global.module.css"

export default function About(){

    return(
        <div className = {styles.aboutPage}>
            <h1 style = {{"textAlign":"center", "fontWeight":"bold"}}>Brain-Train</h1>
            <p>
                Brain-Train is developed by Benny Sun, a sophomore at Duke University majoring in Mathematics,
                Computer Science, and Finance. Brain-Train is designed to help people practice basic skills
                like pattern recognition, mental math, and memory. Currently, Brain-Train supports 3 different games.
                However, in the future, there will be many more additions. 
            </p>
            <p>
                Besides playing more games, there are numerous other feature that this web application provides. First,
                users will be able to save their data to this application's database, allowing them to compare their scores
                among other users. More over, there are basic social features made to enhance communication and create a 
                community on this platform. For example, users will be able to comment on each of their games as well as 
                share their like or dislike. All of this data will stored on our servers, so that anyone else can see them.
                Finally, there is a leaderboard page that shows the best performing users based on the different games
                and their aggregate ranking average.
            </p>
            <p>
                On the technology side, this web application uses the MERN stack to produce this product. Using React, 
                Brain-Train is able to develop many of its webpages as well as the internal game logic that supports 
                many of the games seen below. Using NodeJs, many of the packages used within this project like Babel, 
                Axios, React, and Express are able to interact with each other, creating a cohesive tech system. Moreover, 
                on the backend, this project uses Express, a simple web server package, to create apis, routing. Finally,
                this application leverage MongoDb to store comment, user, and game data for everyone, creating a dynamic 
                system that always updates with the most recent information. 
            </p>
            <p>
                If you want to learn more about the developer, his github's username is bsun1220. He is planning on producing
                multiple other projects including a sports betting arbitrage bot, a full stack exercise tracking application, a 
                meme-ranking page using the ELO-ranking algorith, and wants to pursue a machine learning and math research experience. 
                He eventually works to hope as a quantitative trader or software engineer at companies like Jane Street, Akuna Capital,
                De Shaw, Optiver, Citadel, or Two Sigma.
            </p>
        </div>
    )
}