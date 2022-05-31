import React from "react";
import Click from "./components/click_game"

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
 
const App = () => {
 return (
   <div>
     <Click/>
   </div>
 );
};
 
export default App;