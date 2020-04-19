import React from 'react';
import FadeIn from 'react-fade-in';

// Components
import { MembershipHeader, MembershipIntro, MembershipBenefits } from '../Components/Membership';
import Navbar from '../Components/Navbar';

const Membership = () => {
    return ( // Basic Premium Gold
        <div>
            <FadeIn transitionDuration={300}>
                <Navbar className="white"/>
                <MembershipHeader /> 
                <MembershipIntro />
                <MembershipBenefits />
            </FadeIn>
        </div>
    )
}

export default Membership;