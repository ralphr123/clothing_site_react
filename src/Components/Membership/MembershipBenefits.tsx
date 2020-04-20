import React from 'react';
import LoremIpsum from '../../Data/LoremIpsum.json';

// Icons
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import PhoneIcon from '@material-ui/icons/Phone';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

// Components
import { MembershipBenefit } from '.';

const MembershipBenefits = () => {
    const iconStyle: {fontSize: string, marginRight: number} = {fontSize: '3.25em', marginRight: 15};

    return (
        <div className="no-overflow">
            <div className="full-width center baloo-tamma">
                <div className="membership-benefits">
                    <div className="shtuffer">
                        <span className="membership-benefits-title">Benefits include:</span>
                    </div>
                    <div className="center wrap">
                        <div className="membership-benefits-left">
                            <div>
                                <MembershipBenefit 
                                    title="MONTH-TO-MONTH CONTRACT" 
                                    subheading="No annual commitment required."
                                >
                                    <EventAvailableIcon style={iconStyle} />
                                </MembershipBenefit>
                                <MembershipBenefit 
                                    title="REDEEMABLE POINTS" 
                                    subheading="Collect and redeem them for free items!"
                                >
                                    <ControlPointIcon style={iconStyle} />
                                </MembershipBenefit>
                                <MembershipBenefit 
                                    title="MONTHLY DISCOUNTS" 
                                    subheading="Applicable per order."
                                >
                                    <MoneyOffIcon style={iconStyle} />
                                </MembershipBenefit>
                            </div>
                        </div>
                        <div className="membership-benefits-right">
                            <div>
                                <MembershipBenefit 
                                    title="LIVE CONSULTATIONS" 
                                    subheading="Speak to a verified specialist for help and feedback."
                                >
                                    <PhoneIcon style={iconStyle} />
                                </MembershipBenefit>
                                <MembershipBenefit 
                                    title="FASTER SHIPPING" 
                                    subheading="Guaranteed delivery in under a week!"
                                    subtitle="Differs by plan. Conditions apply."
                                >
                                    <LocalShippingOutlinedIcon style={iconStyle} />
                                </MembershipBenefit>
                                <MembershipBenefit 
                                    title="EARLY ACCESS TO DROPS" 
                                    subheading="Place orders before stock runs out."
                                    subtitle="Differs by plan. Conditions apply."
                                >
                                    <FastForwardOutlinedIcon style={iconStyle} />
                                </MembershipBenefit>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="membership-quit full-width center">
                <div className="start-center baloo-tamma">
                    <CancelPresentationIcon style={{fontSize: 'calc(4.25em + 4.25vw)', marginRight: 25}} />
                    <div>
                        <span className="membership-benefit-title">QUIT-FREE GUARANTEE</span><br/>
                        <div className="quit-free-subheading membership-benefit-subheading">
                            If you are not completely satisfied after the first 30 days, we will refund your initial monthly dues in full.
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-width center center-text no-overflow">
                <div className="membership-fine-print">
                    {LoremIpsum.first}
                    {LoremIpsum.second}<br/><br/>
                    {LoremIpsum.third}
                    {LoremIpsum.fourth}<br/><br/>
                    {LoremIpsum.first}
                </div>
            </div>
        </div>
    )
}

export default MembershipBenefits;