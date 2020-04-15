import React from 'react';
import { Parallax, Background } from 'react-parallax';


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
                        <img src="https://i.ibb.co/j81bmZp/african-sewing.jpg" />
                    </Background>
            </Parallax>
            <div className="ethical-labour full-page">
                {/* <img src="https://i.ibb.co/0r77svw/health-benefits-of-sewing-Fashion-Police-Nigeria-1-removebg-preview.png" className="ethical-labour-image" /> */}
                <div className="ethical-labour-text-container full-size">
                    <div className="ethical-labour-text">
                        <div className="min-height">
                            <p className="our-brand-title">Ethical labour starts with the consumer</p>
                            <p className="our-brand-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href='' className="text-link" >LEARN MORE ABOUT THIS</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EthicalLabour;