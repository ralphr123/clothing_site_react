import React, { useEffect, useState } from 'react';
import '../App.css';

// Models
import { Bubbles } from '../Models/Bubbles';

// Components
import { ImageMain, SideBar, NewArrivals, TeamMemberGrid } from '../Components/Home';
import Navbar from '../Components/Navbar';
import FadeIn from 'react-fade-in';
import Particles from 'react-particles-js';

const Home = () => {
    const [currentScrollHeight, setCurrentScrollHeight] = useState<number>(0);
    useEffect(() => {
        let unmounted: boolean = false;

        if (!unmounted) {
            window.onscroll = () => { // Not responsive, must fix
                requestAnimationFrame(() => {
                    setCurrentScrollHeight(window.pageYOffset);
                });
            }
        }

        return () => {
            unmounted = true;
        };
    }, []);

    const opacity = Math.min(100 / window.pageYOffset, 1);

    const handleNavbarColor = (): string => {
        if (currentScrollHeight < window.outerHeight*0.8) return "white"; // Not responsive, must fix
        if (currentScrollHeight > window.outerHeight*0.8) return "dark ";// Not responsive, must fix

        return "";
    }

    return (
        <div className="no-overflow-x">
            <div className="full-page relative no-overflow">
                <FadeIn>
                    <Navbar className={handleNavbarColor()} />
                    <div className="full-page">
                        {currentScrollHeight < 250 ? (<ImageMain style={{ opacity }} />) : null}
                        <Particles className="black particles" params={(new Bubbles()).params} />
                        {currentScrollHeight < window.screen.height*0.5 ? (<SideBar className="sidebar"/>) : null}
                    </div>
                </FadeIn>
            </div>
            <NewArrivals />
            <TeamMemberGrid />
        </div>
    )
}
/* 
    1. Front Page
    2. New Arrivals
    3. Executive Team
    4. Work for us (?)
*/
export default Home;