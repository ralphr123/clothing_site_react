import React from 'react';
import '../App.css';

// Icons
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
    return (
        <div className="navbar-container center">
                <div className="logo-container">
                    <span className="logo">Ludvig</span>
                </div>
                <div className="register-container center">
                    <span className="register">Sign up</span>
                </div>
                <div className="register-container center">
                    <span className="register">Login</span>
                </div>
                <div className="register-container center">
                    <span className="register">Cart</span>
                </div>
                <div className="register-container center">
                    <SearchIcon fontSize="default" color="inherit" className="search-icon" />
                </div>
        </div>
    )
}

export default NavBar;