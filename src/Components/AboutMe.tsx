import React from 'react';

interface AboutMeProps {
    marginBottom?: number;
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
    return (
        <div id="my-desc" className="baloo-tamma" style={props.marginBottom ? {marginBottom: props.marginBottom} : {}}>
            <p id="site-designed-by">This site was designed by Ralph Rouhana</p>
            <p id="call">
                <a href="mailto:rrouhana@uwaterloo.ca">rrouhana@uwaterloo.ca</a><br id="line-break" />
                <span id="division-span">&nbsp;|&nbsp;</span> 
                <a itemProp="telephone" className="" href="tel:+1647-518-6212">+1 (647)-518 6212</a>
            </p>
        </div>
    )
}

export default AboutMe;