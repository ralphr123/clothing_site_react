import React from 'react';

interface TeamMemberProps {
    src: string;
    name: string;
    jobTitle: string;
    description: string;
    onClick: (id: number) => void;
}

const TeamMember: React.FC<TeamMemberProps> = (props) => {
    return (
        <div className="team-member flex center">
            <img src={props.src} alt="Team Member" className="team-member-image"/><br/>
            <div className="team-description-container">
                <div className="team-member-name">                        
                    <span >{props.name}</span><br/>
                </div>
                <div className="team-member-job">
                    <span >{props.jobTitle}</span><br />
                </div>
                <div className="team-member-description">
                    <span>{props.description}</span><br/>
                </div>
                <div style={{ paddingLeft: 5 }}>                        
                    <span className="text-link unselectable" onClick={() => props.onClick}>More</span>
                </div>
            </div>
        </div>
    )
}

export default TeamMember;