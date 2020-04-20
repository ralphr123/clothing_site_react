import React from 'react';
import { Parallax, Background } from 'react-parallax';

// Components
import { LearnMore } from '.';

const EthicalLabour = () => {
    return (
        <>
            <Parallax // blur={{ min: -150, max: 150 }}
                strength={400}
                style={{ position: 'absolute' }}
                bgImageAlt='ethical labour sewing'
            >
                <div className="full-page"></div>
                    <Background>
                        <img src="https://i.ibb.co/j81bmZp/african-sewing.jpg" alt="women sewing" />
                    </Background>
            </Parallax>
            <LearnMore className="end-center" classNameText="ethical-labour" title="Ethical labour starts with the consumer" />
        </>
    )
}

export default EthicalLabour;