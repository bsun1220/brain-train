import React from "react";
import Click from "./components/click_game";
import Header from "./components/header";
import Memory from"./components/memory_game";
// We use Route in order to define the different routes of our application
import { Route, Routes, Navigate} from "react-router-dom";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";
import MathGame from "./components/math_game";
import About from "./components/about";
import Stat from "./components/statistics"

// We import all the components we need in our ap

const App = () => {
 return (
   <div>
        <Header />
        <Routes>
            <Route exact path = "/" element = {<Dashboard/>}/>
            <Route exact path = "/click" element = {<Click/>}/>
            <Route exact path = "/memory" element = {<Memory/>}/>
            <Route exact path = "/math" element = {<MathGame/>}/>
            <Route exact path = "/about" element = {<About/>}/>
            <Route exact path = "/stat" element = {<Stat/>}/>
            <Route path = "*" element = {<Navigate to = "/"/>} />
        </Routes>
        
        <Footer />
   </div>
 );
};
 
export default App;
