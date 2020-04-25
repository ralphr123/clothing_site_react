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
                                <span id="first-letter">W</span>omens coats are often regarded as an investment piece-- something durable and lasting and expected to be worn for many years to come. 
                                As such, it's important that every coat purchase be treated with the long term in mind-- is this a style that i will like years from now; 
                                is it a style that will still be in years from now?  <br/> <br/>

                                Coats for women are much like coats for men, but with a touch of lightness. One major investment piece for both sexes is the leather coat, 
                                also known as leather jackets or the biker jacket. Here at LUDVIG, our coats and jackets range from timeless basics to expressive rarities. 
                                Jacket hunting is an enjoyable sport-- get your next timepiece here!
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