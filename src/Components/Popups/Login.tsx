import React from 'react';

// Components
import Button from '../Button';

interface LoginProps {
    onClickSignUp?: () => void;
    onClickSubmit?: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
    return (
        <div className="popup center">
            <div className="center-text">
                <span className="popup-title">Welcome back.</span>
                <p className="popup-caption">Sign in to receive recommendations, personalize your homepage, and follow artists and styles that you love.</p>
                <div className="baloo-tamma" style={{ lineHeight: 3.65 }}>
                    <input placeholder="email" className="popup-text-field"></input><br/>
                    <input placeholder="password" className="popup-text-field"></input><br/>
                </div>
                <div className="center" style={{ width: '100%' }}>
                    <Button onClick={props.onClickSubmit} className="relative popup-button" width={225}>Sign in</Button>
                </div>
                <span>Don't have an account? &nbsp;<span onClick={props.onClickSignUp} className="text-link unselectable" >Sign up</span></span>
            </div>
        </div> 
    )
}

export default Login;

/*
            <DialogActions className="full-size end-end">
                <Button autoFocus onClick={props.onClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
*/