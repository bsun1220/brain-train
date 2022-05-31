import React, { useState, useEffect, useInsertionEffect } from "react";
import styles from "./global.module.css";

export default function Red_Page(){
    return(
        <div className = {styles.click_page} id = {styles.red_page}> Wait for Green!</div>
    );
}