import React, { useEffect, useState } from 'react';
import '../App.css';

// Images
import MainImage from '../Images/MainImage.png';
import { SideBar } from '.';
import Particles from 'react-particles-js';

interface ImageMainProps {
    style?: React.CSSProperties;
}

const ImageMain: React.FC<ImageMainProps> = (props) => {
    return (
        <div className="main-image">
            <img style={ props.style } className="main-image" alt="lady" src={MainImage} />
        </div>
    )
}

export default ImageMain;