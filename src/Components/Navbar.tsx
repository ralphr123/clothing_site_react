import React from 'react';
import '../App.css';

// Icons
import SearchIcon from '@material-ui/icons/Search';

interface NavBarProps {
    className?: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <div style={{ width: '100vw', position: 'relative' }}>
            <div className="navbar-container">
                <div className={`navbar center ${props.className}`}>
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
            </div>
            <div className="change-language unselectable">
                <div className="change-language-container center">
                    <img src="https://i.ibb.co/c1GPxrr/51h-LPmry-RHL-AC-SL1500.jpg" className="language-image" /><span>EN</span>
                    <img src="https://i.ibb.co/wyJ44sW/arrow-png-white-16.png" className="select-image" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;