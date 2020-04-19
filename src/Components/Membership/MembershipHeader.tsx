import React from 'react';
import { Parallax } from 'react-parallax';


const MembershipHeader = () => {
    return ( // Speak to a specialist
        <div>
                <Parallax
                    strength={650}
                    bgImage="https://rathdownefabrics.com.au/wp-content/uploads/2016/05/colorful-fabric-lines-23537-1920x1200-1.jpg" 
                    bgImageAlt="tropical fabric"
                    className="membership-image full-width"
                >
                    <div className="membership-image-container full-width no-overflow start-center membership-title" >
                        <span className="absolute">
                            Memberships
                        </span>
                    </div>
                </Parallax>
        </div>
    )
}

export default MembershipHeader;