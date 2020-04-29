import React, { ChangeEvent } from 'react';

// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Components
import TextField from '../TextField';
import { ColorPick, SizePick } from '.';
import { Link, useParams } from 'react-router-dom'

const SideMenu = () => {
    const { demographic } = useParams();

    const handleOnChangePriceFrom = (e: ChangeEvent<HTMLInputElement>): void => {
    }
    
    const handleOnChangePriceTo = (e: ChangeEvent<HTMLInputElement>): void => {
    }

    const handleOnClickFilter = (id: string): void => {
        const filter: HTMLElement | null = document.getElementById("filterc" + id);
        const filtercont: HTMLElement | null = document.getElementById("filter" + id);
        if (!filter!.classList.contains('display-show')) {
            filter!.classList.add('display-show');
            id === '1' ? filtercont!.classList.add('margin-show') : filtercont!.classList.add('margin-show-biggie');
        } else {
            filter!.classList.remove('display-show');
            id === '1' ? filtercont!.classList.remove('margin-show') : filtercont!.classList.remove('margin-show-biggie');
        }
    }

    return (
        <div className="side-menu baloo-tamma unselectable">
            <div style={{ marginBottom: 10 }}>
                <span className="footer-option mobile-title">WOMEN</span>
                <div className="side-menu-two side-menu-layer">
                    <Link className="no-text-decoration" to={`/browse-catalog/${demographic}/apparel`}>
                        <span className="footer-option">Apparel</span><br/>
                    </Link>
                    <Link className="no-text-decoration" to={`/browse-catalog/${demographic}/shoes`}>
                        <span className="footer-option">Shoes</span><br/>
                    </Link>
                    <Link className="no-text-decoration" to={`/browse-catalog/${demographic}/accessories`}>
                        <span className="footer-option">Accessories</span><br/>
                    </Link>
                    <Link className="no-text-decoration" to={`/browse-catalog/${demographic}/collections`}>
                        <span className="footer-option">Collections</span><br/>
                    </Link>
                    <Link className="no-text-decoration" to={`/browse-catalog/${demographic}/lifestyle`}>
                        <span className="footer-option">Lifestyle</span><br/>
                    </Link>
                </div>
            </div>
            <div>
                <span className="footer-option mobile-title">FILTER</span>
                <div className="side-menu-two side-menu-layer mobile-center">
                    <div id="mobile-margin">
                        <div id="filter1">
                            <div className="center-vertical">   
                                <span className="footer-option" onClick={() => handleOnClickFilter('1')}>Price</span>
                                <ExpandMoreIcon className="expand-more" /><br/>
                            </div>
                            <div id="filterc1" className="center-horiztonal display-none mobile-width mobile-center">
                                <TextField 
                                    width="40px" 
                                    placeholder="$0"
                                    type="text"
                                    onChange={handleOnChangePriceFrom}
                                />
                                &nbsp;&nbsp;to&nbsp;&nbsp;
                                <TextField 
                                    width="40px" 
                                    placeholder="$400"
                                    type="text"
                                    onChange={handleOnChangePriceTo}
                                />
                            </div>
                        </div>
                        <div id="filter2">
                            <div className="center-vertical">
                                <span className="footer-option" onClick={() => handleOnClickFilter('2')}>Color</span>
                                <ExpandMoreIcon className="expand-more" /><br/>
                            </div>
                            <div id="filterc2" className="center-horiztonal display-none mobile-width mobile-center">
                                <ColorPick lineBreak />
                            </div>
                        </div>
                        <div id="filter3">
                            <div className="center-vertical">
                                <span className="footer-option" onClick={() => handleOnClickFilter('3')}>Size</span>
                                <ExpandMoreIcon className="expand-more" /><br/>
                            </div>
                            <div id="filterc3" className="center-horiztonal display-none mobile-width mobile-center">
                                <SizePick lineBreak />
                            </div>
                        </div>
                        <div id="filter4">
                            <div className="center-vertical">
                                <span className="footer-option" onClick={() => handleOnClickFilter('4')}>Sort</span>
                                <ExpandMoreIcon className="expand-more" /><br/>
                            </div>
                            <div id="filterc4" className="center-horiztonal display-none mobile-width mobile-center">
                                <div>
                                    <span>$</span><br/>
                                    <span>$$$</span><br/> 
                                    <span>New Arrivals</span><br/>
                                    <span>Popular</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;