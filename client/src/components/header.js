import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import styles from "./global.module.css";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand" to="/" id = {styles.left}>
          <img style={{"width" : 30 + '%'}} src="BrainTrain.png" alt = "brains"></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className = {`${styles.left} collapse navbar-collapse`} id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto" id = {styles.yep}>
           <li className="nav-item">
             <NavLink className="nav-link" to="/stat">
               Statistics
             </NavLink>
           </li>
         </ul>
         <ul className="navbar-nav ml-auto" id = {styles.yep}>
           <li className="nav-item">
             <NavLink className="nav-link" to="/about">
               About
             </NavLink>
           </li>
         </ul>
       </div>
        </nav>
    );
   }