import React from 'react';
import '../App.css'
import FadeIn from 'react-fade-in';
import { ParallaxProvider } from 'react-scroll-parallax';

// Components
import { EthicalLabour, BetterForLess, SuperbQuality } from '../Components/OurBrand';
import NavBar from '../Components/Navbar';
import BrigherColors from '../Components/OurBrand/BrighterColors';



const OurBrand = () => {
    return (
        <div>
            <FadeIn>
                <NavBar className="dark-no-background" /> 
                <EthicalLabour />
                <ParallaxProvider>
                    <BetterForLess />
                </ParallaxProvider>
                <BrigherColors />
                <ParallaxProvider>
                    <SuperbQuality />
                </ParallaxProvider>
            </FadeIn>
        </div>
    )
}

/* 
    1. Ethical labour starts with the consumer
    2. Better materials for less https://paintingvalley.com/drawings/sewing-drawing-5.jpg
    3. Brighter colors
    4. A vow to superb quality
*/

export default OurBrand;