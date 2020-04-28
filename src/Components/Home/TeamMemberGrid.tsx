import React from 'react';

// Components
import { TeamMember } from '.';
import TeamMembers from '../../Data/TeamMembers.json';

const TeamMemberGrid = () => {
    // const [id, setId] = useState<number>(-1);

    const handleOnClickTeamMember = (id: number): void => {
        // setId(id);
        console.log(id);
        console.log("hello");
    }

    return (
        <div className="team-member-grid full-width">
            <div className="team-members mobile">
                <div className="team center">
                    <span>Executive Team</span>
                </div>
                <div className="grid full-size center-horizontal">
                    {TeamMembers.map((member) => {
                        return (
                            <TeamMember 
                                name={member.name}
                                jobTitle={member.jobTitle}
                                description={member.shortDescription}
                                src={member.src}
                                onClick={() => handleOnClickTeamMember(member.id)}
                                key={member.id}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="our-team mobile center">
                <div>
                    {/* <div className="our-team-title baloo-tamma center">
                            <span>That's our mission</span>
                    </div> */}
                    <div className="our-team-descr-cont center-horizontal">
                        <div className="our-team-descr">
                            <p>
                                <span id="first-letter">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/> <br/>

                                Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Nulla pharetra diam sit amet. Nibh 
                                ipsum consequat nisl vel pretium lectus quam. Tellus at urna condimentum mattis pellentesque id nibh tortor
                                id. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Augue ut lectus arcu bibendum at.
                            </p>
                        </div>
                    </div>
                    <div className="center-text" style={{ width: '100%' }}>
                        <span className="our-team-title baloo-tamma">That's our mission</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberGrid;