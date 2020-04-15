import React from 'react';
import '../App.css'
import FadeIn from 'react-fade-in';

// Components
import { EthicalLabour } from '../Components/OurBrand';
import NavBar from '../Components/Navbar';



const OurBrand = () => { 
    return (
        <div>
            <FadeIn>
                <NavBar className="dark-no-background" /> 
                <EthicalLabour />
            </FadeIn>
        </div>
    )
}

/* 
    1. Ethical labour starts with the consumer
    2. Better materials for less
*/

export default OurBrand;