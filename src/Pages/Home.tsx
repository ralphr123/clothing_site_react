import React, { useEffect, useState } from 'react';
import '../App.css';

// Models
import { Bubbles } from '../Models/Bubbles';

// Components
import { ImageMain, NavBar, SideBar, NewArrivals } from '../Components';
import FadeIn from 'react-fade-in';
import Particles from 'react-particles-js';

const Home = () => {
    const [currentScrollHeight, setCurrentScrollHeight] = useState<number>(0);
    useEffect(() => {
        window.onscroll = () => {
            const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
            if (currentScrollHeight != newScrollHeight) {
                setCurrentScrollHeight(window.scrollY);
            }
        }
    });

    const opacity = Math.min(100 / currentScrollHeight, 1);

    return (
        <div>
            <div className="relative">
                <FadeIn>
                    <NavBar />
                    <div className="flex">
                        {currentScrollHeight < 250 ? (<ImageMain style={{ opacity }} />) : null}
                        <Particles className="black particles" params={(new Bubbles()).params} />
                        {currentScrollHeight < 650 ? (<SideBar className="sidebar"/>) : null}
                    </div>
                </FadeIn>
            </div>
            <NewArrivals />
        </div>
    )
}
/* 
    1. Front Page
    2. The Stories
    3. New Arrivals
    4. Work for us
*/
export default Home;