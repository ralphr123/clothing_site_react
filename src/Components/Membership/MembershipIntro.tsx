import React from 'react';

// Components
import { MembershipOption } from '.';

const listItems: {basic: string[], premium: string[], gold: string[]} = {
    basic: ['Redeemable points on purchases', '10% off coupon per month', '1 free monthly consultation', '', '', ''],
    premium: ['Redeemable points on purchases', '20% off coupon per month', '1 free weekly consultation', 'Early access to limited editions', 'Faster shipping', ''],
    gold: ['Redeemable points on purchases', '30% off coupon per month', '1 free daily consultation', 'Priority access to limited editions', 'Two day shipping across Canada', '2.5% off whole site']
}

const MembershipIntro = () => {
    return (
        <div className="membership-intro full-width">
            <div className="membership-intro-box full-width center-text">
                <span className="membership-intro-title baloo-tamma">YOUR PLAN FOR <span className="style">MORE STYLE</span></span> <br/>
                <span>An investment in LUDVIG is an investment in yourself.</span>
            </div>
            <div className="membership-options-container full-width center" >
                    <MembershipOption 
                        title="Basic"
                        price="$9.99/mo"
                        listItems={listItems.basic}
                        className="basic"
                    />
                    <MembershipOption 
                        title="Premium" 
                        price="$19.99/mo"
                        listItems={listItems.premium}
                        className="premium"
                    />
                    <MembershipOption 
                        title="Gold" 
                        price="$39.99/mo"
                        listItems={listItems.gold}
                        className="gold"
                    />
            </div>

        </div>
    )
}

export default MembershipIntro;