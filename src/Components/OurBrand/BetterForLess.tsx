import React, { useLayoutEffect } from 'react';
import { Parallax, useController } from 'react-scroll-parallax';


const BetterForLess = () => {
    const { parallaxController } = useController();
 
    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);
    
    return (
        <div className="better-for-less full-page">
            <img src="https://i.ibb.co/RCV5n9y/9066602-Application-removebg-preview.png" className="better-for-less-image" />
            <Parallax className="no-overflow" y={[40, -40]}>
                <div className="full-page center-vertical no-overflow">
                        <div className="better-for-less-box">
                            <p className="our-brand-title">Better materials for less</p>
                            <p className="our-brand-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href='' className="text-link" >LEARN MORE ABOUT THIS</a>
                        </div>
                </div>
            </Parallax>
        </div>
    )
}

export default BetterForLess;