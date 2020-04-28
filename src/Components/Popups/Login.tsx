import React from 'react';

// Components
import Button from '../Button';
import TextField from '../TextField';

interface LoginProps {
    onClickSignUp?: () => void;
    onClickSubmit?: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
    const handleOnChangeText = (): void => {

    }

    return (
        <div className="popup center">
            <div className="center-text">
                <span className="popup-title">Welcome back.</span>
                <p className="popup-caption">Sign in to receive recommendations, personalize your homepage, and follow artists and styles that you love.</p>
                <div className="baloo-tamma" style={{ lineHeight: 3.65 }}>
                    <TextField 
                        type="text" 
                        placeholder="email"
                        width="250px"
                        onChange={handleOnChangeText} 
                    /><br/>
                    <TextField 
                        type="password" 
                        placeholder="password" 
                        width="250px"
                        onChange={handleOnChangeText}
                    />
                </div>
                <div className="center total-width">
                    <Button 
                        onClick={props.onClickSubmit} 
                        className="relative popup-button" 
                        width={225}
                    >
                        Sign in
                    </Button>
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