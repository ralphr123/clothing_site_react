import React, { useEffect } from 'react';
import '../App.css'
import FadeIn from 'react-fade-in';
import { ParallaxProvider } from 'react-scroll-parallax';

// Components
import { EthicalLabour, BetterForLess, SuperbQuality } from '../Components/OurBrand';
import Navbar from '../Components/Navbar';
import BrigherColors from '../Components/OurBrand/BrighterColors';

interface OurBrandProps {
    onClickPopup: (option: string) => void;
    cart: number;
}

const OurBrand: React.FC<OurBrandProps> = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <FadeIn>
            <Navbar className="dark-no-background" onClickPopup={props.onClickPopup} cart={props.cart} /> 
            <EthicalLabour />
            <ParallaxProvider>
                <BetterForLess />
            </ParallaxProvider>
            <BrigherColors />
            <ParallaxProvider>
                <SuperbQuality />
            </ParallaxProvider>
        </FadeIn>
    )
}

/* 
    1. Ethical labour starts with the consumer
    2. Better materials for less
    3. Brighter colors
    4. A vow to superb quality
*/

export default OurBrand;