import React from 'react';
import './header.css';
export default function Header(){
    return (
        <header>
        <nav className="nav">
            <img src="./logo192.png" />
            <ul className="nav-items">
                <li>Courses</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}