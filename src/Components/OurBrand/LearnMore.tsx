import React from 'react';

interface LearnMoreProps {
    className?: string;
    classNameText?: string;
    title?: string;
}

const LearnMore: React.FC<LearnMoreProps> = (props) => {
    return (
        <div className="relative no-overflow full-page">
            {/* <img src="https://i.ibb.co/0r77svw/health-benefits-of-sewing-Fashion-Police-Nigeria-1-removebg-preview.png" className="ethical-labour-image" /> */}
            <div className={`${props.className} full-page`}>
                <div className={` ${props.classNameText} learn-more-text`}>
                    <div className="min-height">
                        <p className="our-brand-title baloo-tamma">{props.title}</p>
                        <p className="our-brand-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a href='' className="text-link" >LEARN MORE ABOUT THIS</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnMore;