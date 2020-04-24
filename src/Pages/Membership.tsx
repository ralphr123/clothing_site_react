import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';

// Components
import { MembershipHeader, MembershipIntro, MembershipBenefits } from '../Components/Membership';
import Navbar from '../Components/Navbar';

const Membership = () => {
    const [currentScrollHeight, setCurrentScrollHeight] = useState<number>(0);
    useEffect(() => {
        let unmounted: boolean = false;

        if (!unmounted) {
            window.onscroll = () => {
                requestAnimationFrame(() => {
                    setCurrentScrollHeight(window.pageYOffset);
                });
            }
        }

        return () => {
            unmounted = true;
        };
    }, []);

    const handleNavbarColor = (): string => {
        if (currentScrollHeight < window.outerHeight*0.4) return "white";
        if (currentScrollHeight > window.outerHeight*0.4) return "dark ";

        return "";
    }

    return (
        <div>
            <FadeIn transitionDuration={300}>
                <Navbar className={handleNavbarColor()}/>
                <MembershipHeader /> 
                <MembershipIntro />
                <MembershipBenefits />
            </FadeIn>
        </div>
    )
}

export default Membership;