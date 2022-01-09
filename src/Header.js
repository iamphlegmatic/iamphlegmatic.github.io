import React from 'react';

function MakeVisible(){
const navilist = document.getElementById("navi-list");
navilist.classList.toggle("active");
}

export default function Header(){
    return (
       <nav className="navbar">
          <div className="brand-container">
              <p className="brandname">CODIFY</p>
          </div>
          <ul className="nav-list" id="navi-list">
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">SignUp</a></li>
              <li><a href="#">Services</a></li>
          </ul>
          <div className="menu" id="toggle-button" onClick={MakeVisible}>
                <div className="menu-item"> </div>
                <div className="menu-item"> </div>
                <div className="menu-item"> </div>
          </div>
       </nav>
    )
}