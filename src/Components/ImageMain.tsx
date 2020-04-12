import React from 'react';
import '../App.css';

// Images
import MainImage from '../Images/MainImage.png';

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