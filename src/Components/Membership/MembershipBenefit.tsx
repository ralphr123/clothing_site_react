import React from 'react';

interface MembershipBenefit {
    title: string;
    subheading?: string;
    subtitle?: string;
}

const MembershipBenefit: React.FC<MembershipBenefit> = (props) => {
    return (
        <div className="membership-benefit baloo-tamma start-center" style={props.subtitle ? {} : {marginBottom: 58}}>
            {props.children}
            <div style={{ lineHeight: '25px' }}>
                <span className="membership-benefit-title">{props.title}</span><br/>
                <div style={{ lineHeight: '20px' }}>
                    <div className="shtuffers">
                        <span className="membership-benefit-subheading">{props.subheading}</span><br/>
                    </div>
                    <span className="membership-benefit-subtitle">{props.subtitle}</span>
                </div>
            </div>
        </div>
    )
}

export default MembershipBenefit;