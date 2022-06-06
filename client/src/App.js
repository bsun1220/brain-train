import React from "react";
import Click from "./components/click_game"
import Header from "./components/header"
import Memory from"./components/memory_game"
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard"
import MathGame from "./components/math_game"

// We import all the components we need in our ap

const App = () => {
 return (
   <div>
        <Header />
        <Routes>
        <Route exact path = "/" element = {<Dashboard/>}/>
          <Route path = "/click" element = {<Click/>}/>
          <Route path = "/memory" element = {<Memory/>}/>
          <Route path = "/math" element = {<MathGame/>}/>
        </Routes>
        <Footer />
   </div>
 );
};
 
export default App;
