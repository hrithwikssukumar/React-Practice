import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Users from "./pages/Users"

function App () {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/users" element = {<Users/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

