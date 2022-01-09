import React from 'react';
import  { useEffect, useState } from "react";
import "./style.css";


export default function Header(){
    const [showMenu, setShowMenu] = useState(false);
    return (
       <nav className={`navbar`}>
          <div className="brand-container">
              <p className="brandname">CODIFY</p>
          </div>
          <ul className={`nav-list ${showMenu && "active"}`}>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">SignUp</a></li>
              <li><a href="#">Services</a></li>
          </ul>
          <div className={`menu`}  onClick={() => setShowMenu(!showMenu)}>
                <div className="menu-item"> </div>
                <div className="menu-item"> </div>
                <div className="menu-item"> </div>
          </div>
       </nav>
    )
}