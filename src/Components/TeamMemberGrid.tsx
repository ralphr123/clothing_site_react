import React, { useState } from 'react';

// Components
import { TeamMember } from '.';
import TeamMembers from '../Data/TeamMembers.json';

const TeamMemberGrid = () => {
    const [id, setId] = useState<number>(-1);

    const handleOnClickTeamMember = (id: number): void => {
        setId(id);
        console.log(id);
    }

    return (
        <>
            <div className="team-member-grid" onClick={() => handleOnClickTeamMember(3)}>
                <div className="team-members tester">
                    <div className="team center">
                        <span className="">Executive Team</span>
                    </div>
                    <div className="full-size">
                        <TeamMember 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                            name="Antoine Grandeur"
                            jobTitle="Chief Creative Officer"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                            onClick={() => handleOnClickTeamMember(3)}
                        />
                    </div>
                </div>
                <div className="our-team tester">

                </div>
            </div>
        </>
    )
}

export default TeamMemberGrid;