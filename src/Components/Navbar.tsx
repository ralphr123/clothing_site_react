import React from 'react';

// Icons
import SearchIcon from '@material-ui/icons/Search';

//Components
import { Link } from 'react-router-dom';


interface NavbarProps {
    className?: string;
    onClickPopup?: (option: string) => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const getColor = (): string => { // NEED TO CHANGE
        if (props.className === 'dark' || props.className === "dark-no-background") return 'color-black';
        return '';
    }
    const color: { color: string } = { color: getColor()};
    return (
        <div style={{ width: '100vw', position: 'relative' }}>
            <div className="navbar-container full-width unselectable">
                <div className={`navbar center ${props.className} full-width`}>
                    <Link className="logo-container no-text-decoration" to='/'>
                        <span className="logo">Ludvig</span>
                    </Link>
                    <div className="register-container center">
                        <span onClick={() => props.onClickPopup!('signup')} className="register">Sign up</span>
                    </div>
                    <div className="register-container center">
                        <span onClick={() => props.onClickPopup!('login')} className="register">Login</span>
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
                <div>
                    <div className={`${props.className?.includes('dark') ? 'color-black' : ''} change-language-container center`}>
                        <div className="fixed">
                            <img src="https://i.ibb.co/c1GPxrr/51h-LPmry-RHL-AC-SL1500.jpg" className="language-image" alt="Canadian flag" /><span>FR</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;