import React from 'react';
import { Parallax, Background } from 'react-parallax';

// Components
import { LearnMore } from '.';


const BrigherColors = () => {
    return (
        <>
            <Parallax // blur={{ min: -150, max: 150 }}
                strength={400}
                style={{ position: 'absolute' }}
                bgImageAlt='ethical labour sewing'
                bgImage="https://i.ibb.co/K6MxwjG/i-Stock-911053804-1030x687.jpg"
                className="full-page"
            >
                <div className="full-page"></div>
            </Parallax>
            <LearnMore className="start-center" classNameText="ethical-labour" title="Brighter colors" />
        </>
    )
}

export default BrigherColors;