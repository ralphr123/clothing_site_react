import React from 'react';
import '../App.css';

// Images
import MainImage from '../Images/MainImage.png';
import { SideBar } from '.';
import Particles from 'react-particles-js';

const ImageMain = () => {
    return (
        <div className="main-image">
            <img className="main-image" alt="lady" src={MainImage} />
        </div>
    )
}

export default ImageMain;