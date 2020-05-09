import React, { useEffect, useState } from 'react';
import '../App.css';

// Models
import { Bubbles } from '../Models/Bubbles';

// Icons
import MouseOutlinedIcon from '@material-ui/icons/MouseOutlined';

// Components
import { ImageMain, SideBar, NewArrivals, TeamMemberGrid } from '../Components/Home';
import Navbar from '../Components/Navbar';
import FadeIn from 'react-fade-in';
import Particles from 'react-particles-js';

interface HomeProps {
    onClickPopup: (option: string) => void;
    onClickAddToCart: (src: string, description: string, price: number) => void;
    cart: number;
}

const Home: React.FC<HomeProps> = (props) => {
    const [currentScrollHeight, setCurrentScrollHeight] = useState<number>(0);
    useEffect(() => {
        let unmounted: boolean = false;
        window.scrollTo(0, 0);

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
            <Navbar className={handleNavbarColor()} onClickPopup={props.onClickPopup} cart={props.cart} />
            <div className="full-page relative no-overflow">
                <FadeIn>
                    <div className="full-page">
                        {currentScrollHeight < 250 ? (<ImageMain style={{ opacity }} />) : null}
                        <Particles className="black particles" params={(new Bubbles()).params} />
                        {currentScrollHeight < window.screen.height*0.5 ? (<SideBar onClickPopup={props.onClickPopup} className="sidebar"/>) : null}
                        <div id="scroll-container" style={{ opacity }}>
                            <MouseOutlinedIcon id="scroll" className="absolute" />
                            <span id="scroll-text" className="absolute baloo-tamma">scroll</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
            <NewArrivals onClickAddToCart={props.onClickAddToCart} />
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