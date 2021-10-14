import React from 'react';

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

// Components
import Button from '../Button';
import AboutMe from '../AboutMe';

interface AboutProps {
}

const About: React.FC<AboutProps> = (props) => {
    const handleOnClick = (option: boolean) => {
        if (option) window.open("https://github.com/ralphr123/project4_clothing_site_react",'_blank');
        else window.open("https://drive.google.com/file/d/1DP5xj8OI7W1-vQcYZccaPciRjX6n2mwa/view");
    }
    return (
        <div className="about center-text">
            <AboutMe marginBottom={27.5} />
            <div className="center wrap">
                <div className="about-item">
                    <DescriptionIcon 
                        className="large-resume-icon"
                        onClick = {() => handleOnClick(false)}
                    />
                    <Button 
                        className="relative popup-button" 
                        width={225}
                        onClick = {() => handleOnClick(false)}
                    >
                        Résumé
                    </Button>
                </div>
                <div className="about-item">
                    <GitHubIcon 
                        className="large-github-icon"
                        onClick = {() => handleOnClick(true)}
                    />
                    <Button 
                        className="relative popup-button" 
                        width={225}
                        onClick = {() => handleOnClick(true)}
                    >
                        Source Code
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default About;