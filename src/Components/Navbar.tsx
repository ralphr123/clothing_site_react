import React from 'react';
import '../App.css';


const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <span className="logo">Ludvig</span>
                <div className="register-container">
                    <span className="register">Sign up</span>
                </div>
                <div className="register-container">
                    <span className="register">Login</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;