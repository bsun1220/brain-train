import React, { useState, useEffect, useInsertionEffect } from "react";
import styles from "./global.module.css";

export default function Green_Page(){
    return(
        <div className = {styles.click_page} id = {styles.green_page}> Click Me</div>
    );
}