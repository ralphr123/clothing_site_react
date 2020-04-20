import React, { useLayoutEffect } from 'react';
import { Parallax, useController } from 'react-scroll-parallax';


const SuperbQuality = () => {
    const { parallaxController } = useController();
 
    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return (
        <div className="superb-quality-container no-overflow full-page center">
            {/* <div className="our-brand-border" /> */}
            <img src="https://i.ibb.co/XFb27S2/sewing-drawing-woman-2-original.png" className="superb-quality-image" alt="sewing woman" />
            <Parallax y={[30, -42]}>
                <div className="superb-quality" >
                        <div className="superb-quality-text">
                            <p className="our-brand-title baloo-tamma">A vow to superb quality</p>
                            <p className="our-brand-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="superb-quality-button">
                            <div className="browse-catalog-button baloo-tamma center">
                                <span className="expand" >BROWSE CATALOG</span>
                            </div>
                        </div>
                    </div>
            </Parallax>
        </div>
    )
}

export default SuperbQuality;