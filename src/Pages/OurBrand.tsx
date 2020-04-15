import React, { useLayoutEffect } from 'react';
import '../App.css'
import FadeIn from 'react-fade-in';
import { ParallaxProvider, useController } from 'react-scroll-parallax';

// Components
import { EthicalLabour, BetterForLess } from '../Components/OurBrand';
import NavBar from '../Components/Navbar';



const OurBrand = () => {
    return (
        <div>
            <FadeIn>
                <NavBar className="dark-no-background" /> 
                <EthicalLabour />
                <ParallaxProvider>
                    <BetterForLess />
                </ParallaxProvider>
            </FadeIn>
        </div>
    )
}

/* 
    1. Ethical labour starts with the consumer
    2. Better materials for less
*/

export default OurBrand;