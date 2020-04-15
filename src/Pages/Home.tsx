import React, { useEffect, useState } from 'react';
import '../App.css';

// Models
import { Bubbles } from '../Models/Bubbles';

// Components
import { ImageMain, SideBar, NewArrivals, TeamMemberGrid, Footer } from '../Components/Home';
import NavBar from '../Components/Navbar';
import FadeIn from 'react-fade-in';
import Particles from 'react-particles-js';

const Home = () => {
    const [currentScrollHeight, setCurrentScrollHeight] = useState<number>(0);
    useEffect(() => {
        window.onscroll = () => { // Not responsive, must fix
            requestAnimationFrame(() => {
                setCurrentScrollHeight(window.pageYOffset);
            });
        }
    });

    const opacity = Math.min(100 / window.pageYOffset, 1);

    const handleNavBarColor = (): string => {
        if (currentScrollHeight < window.outerHeight*0.8) return "white"; // Not responsive, must fix
        if (currentScrollHeight > window.outerHeight*0.8) return "dark ";// Not responsive, must fix

        return "";
    }

    return (
        <div>
            <div className="relative">
                <FadeIn>
                    <NavBar className={handleNavBarColor()} />
                    {/* <h3 style={{ position: "fixed", color: (currentScrollHeight < 300 ? "white" : "black"), marginTop: 100, marginLeft: 100 }}>{`Percentage scrolled: ${currentScrollHeight}%.`}</h3> 
                    <h3 style={{ position: "fixed", color: (currentScrollHeight < 300 ? "white" : "black"), marginTop: 150, marginLeft: 200 }}>{`Percentage scrolled: ${window.outerHeight}%.`}</h3>  */}
                    <div className="flex">
                        {currentScrollHeight < 250 ? (<ImageMain style={{ opacity }} />) : null}
                        <Particles className="black particles" params={(new Bubbles()).params} />
                        {currentScrollHeight < window.screen.height*0.5 ? (<SideBar className="sidebar"/>) : null}
                    </div>
                </FadeIn>
            </div>
            <NewArrivals />
            <TeamMemberGrid />
            <Footer />
        </div>
    )
}
/* 
    1. Front Page
    2. New Arrivals
    3. The Stories
    4. Work for us
*/
export default Home;