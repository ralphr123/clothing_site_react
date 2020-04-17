import React, { useLayoutEffect } from 'react';
import { Parallax, useController } from 'react-scroll-parallax';

// Components
import { LearnMore } from '.';


const BetterForLess = () => {
    const { parallaxController } = useController();
 
    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return (
        <div className="full-page">
            <img src="https://i.ibb.co/kBRMmHL/soft-drawing-2-removebg-preview.png" className="better-for-less-image" />
            <Parallax className="no-overflow" y={[40, -46]}>
                <LearnMore className="start-center better-for-less" classNameText="better-for-less-text" title="Better materials for less" />
            </Parallax>
        </div>
    )
}

export default BetterForLess;