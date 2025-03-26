import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <h1>Hrithwik</h1>
        <ul>
            <Link to ="/">Home</Link>
            <Link to ="/contact">Contact</Link>
            <Link to ="/about">About</Link>
            <Link to ="/users">User</Link>
        </ul>
    </nav>
   
  )
};

export default Navbar
