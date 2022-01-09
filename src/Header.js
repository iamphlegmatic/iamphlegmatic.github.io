import React from 'react';
export default function Header(){
    return (
        <header>
        <nav className="nav">
            <div className='logo'>
            <img src="./logo192.png" />
            <h2>Learn to Code</h2>
            </div>
            <ul className="nav-items">
                <li>Courses</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}