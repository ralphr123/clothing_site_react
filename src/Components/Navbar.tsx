import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import SearchIcon from '@material-ui/icons/Search';

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const getColor = (): string => { // NEED TO CHANGE
        if (props.className === 'dark' || props.className === "dark-no-background") return 'black';
        return '';
    }
    const color: { color: string } = { color: getColor()};
    return (
        <div style={{ width: '100vw', position: 'relative' }}>
            <div className="navbar-container full-width">
                <div className={`navbar center ${props.className} full-width`}>
                        <Link className="logo-container no-text-decoration" to='/'>
                            <span className="logo">Ludvig</span>
                        </Link>
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
            <div className="change-language unselectable full-width">
                <div className="change-language-container center" style={color}>
                    <img src="https://i.ibb.co/c1GPxrr/51h-LPmry-RHL-AC-SL1500.jpg" className="language-image" /><span>EN</span>
                    <img src="https://i.ibb.co/wyJ44sW/arrow-png-white-16.png" className="select-image" /> {/* MAKE INTO ICON*/}
                </div>
            </div>
        </div>
    )
}

export default Navbar;