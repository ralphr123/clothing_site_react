import React from 'react';

// Components
import Button from '../Button';
import TextField from '../TextField';

interface SignUpProps {
    onClickLogin?: () => void;
    onClickSubmit?: () => void;
}

const SignUp: React.FC<SignUpProps> = (props) => {
    return (
        <div className="popup center">
            <div className="center-text">
                <span className="popup-title">Join Ludvig.</span>
                <p className="popup-caption">Create an account to receive new arrivals in your inbox, personalize your homepage, and follow artists and styles that you love.</p>
                <div className="baloo-tamma" style={{ lineHeight: 3.65 }}>
                    <TextField type="text" placeholder="email" width="250px" /><br/>
                    <TextField type="password" placeholder="password" width="250px"/><br/>
                    <TextField type="password" placeholder="confirm password" width="250px"/>
                </div>
                <div className="center" style={{ width: '100%' }}>
                    <Button onClick={props.onClickSubmit} className="relative popup-button" width={225}>Sign up</Button>
                </div>
                <span>Already have an account? &nbsp;<span onClick={props.onClickLogin} className="text-link unselectable" >Sign in</span></span>
            </div>
        </div> 
    )
}

export default SignUp;

/*
            <DialogActions className="full-size end-end">
                <Button autoFocus onClick={props.onClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
*/