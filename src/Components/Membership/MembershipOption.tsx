import React from 'react';

interface MembershipOptionProps {
    title: string;
    price: string;
    className?: string;
    listItems: string[];
}

const MembershipOption: React.FC<MembershipOptionProps> = (props) => {
    return (
        <div className="membership-option center-text unselectable baloo-tamma">
            <div className={`${props.className} front center`}>
                <div>
                    <div style={{ lineHeight: '25px' }}>
                        <span className="membership-option-title">{props.title}</span><br/>
                        <span className="membership-option-price">{props.price}</span>
                    </div>
                    <div className="membership-list" style={{ lineHeight: '30px' }}>
                        {props.listItems.map((item, index) => {
                            return (
                                <>
                                    <span key={index}>{item}</span><br/>
                                </>
                            )
                        })}
                    </div>
                    <div className="membership-back-text" style={{ lineHeight: '25px' }}>
                            <span className="membership-back-title">No contract.</span><br/>
                            <span className="membership-back-title">Cancel anytime.</span>
                    </div>
                    <div style={{ width: '100%' }} className="center">
                            <div className="membership-back-button center">
                                LEARN MORE
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembershipOption;