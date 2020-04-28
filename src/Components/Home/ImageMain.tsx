import React from 'react';

interface ImageMainProps {
    style?: React.CSSProperties;
}

const ImageMain: React.FC<ImageMainProps> = (props) => {
    return (
        <div className="main-image">
            <img style={ props.style } className="main-image" alt="lady" src='https://i.ibb.co/wgQqxsJ/Main-Image.png' />
        </div>
    )
}

export default ImageMain;