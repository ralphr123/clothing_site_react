import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SideMenu = () => {
    return (
        <div className="side-menu baloo-tamma">
            <div style={{ marginBottom: 10 }}>
                <span className="footer-option mobile-title">WOMEN</span>
                <div className="side-menu-two side-menu-layer">
                    <span className="footer-option">Apparel</span><br/>
                    <span className="footer-option">Shoes</span><br/>
                    <span className="footer-option">Accessories</span><br/>
                    <span className="footer-option">Collections</span><br/>
                    <span className="footer-option">Lifestyle</span><br/>
                </div>
            </div>
            <div>
                <span className="footer-option mobile-title">FILTER</span>
                <div className="side-menu-two side-menu-layer mobile-center">
                    <div id="mobile-margin">
                        <div className="center-vertical">
                            <span className="footer-option">Price</span><ExpandMoreIcon className="expand-more" /><br/>
                        </div>
                        <div className="center-vertical">
                            <span className="footer-option">Color</span><ExpandMoreIcon className="expand-more" /><br/>
                        </div>
                        <div className="center-vertical">
                            <span className="footer-option">Size</span><ExpandMoreIcon className="expand-more" /><br/>
                        </div>
                        <div className="center-vertical">
                            <span className="footer-option">Sort</span><ExpandMoreIcon className="expand-more" /><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;