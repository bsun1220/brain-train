import React from "react";
import Click from "./components/click_game"
import Header from "./components/header"
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";

// We import all the components we need in our ap

const App = () => {
 return (
   <div>
        <Header />
        <Routes>
          <Route path = "/click" element = {<Click/>}/>
        </Routes>
        <Footer />
   </div>
 );
};
 
export default App;