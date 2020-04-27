import React, { useState, ChangeEvent, useEffect } from 'react';

// Components
import Button from '../Button';
import TextField from '../TextField';

interface SignUpProps {
    onClickLogin?: () => void;
    onClickSubmit?: () => void;
}

const SignUp: React.FC<SignUpProps> = (props) => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [matchError, setMatchError] = useState<boolean>(false);
    const [lengthError, setLengthError] = useState<boolean>(false);

    const notMatchedString: string = "Passwords must match."
    const lengthString: string = "Password must be at least 8 characters."

    useEffect(() => {
        if (password !== confirmPassword) setMatchError(true);
        else setMatchError(false);
        if (password !== '' && password.length < 8) setLengthError(true);
        else setLengthError(false);
    }, [password, confirmPassword]);

    const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    }
    
    const handleOnChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setConfirmPassword(e.target.value);
    }

    return (
        <div className="popup center">
            <div className="center-text">
                <span className="popup-title">Join Ludvig.</span>
                <p className="popup-caption">Create an account to receive new arrivals in your inbox, personalize your homepage, and follow artists and styles that you love.</p>
                <div className="baloo-tamma" style={{ lineHeight: 3.65 }}>
                    <TextField 
                        type="text" 
                        placeholder="email" 
                        width="250px" 
                    /><br/>
                    <TextField 
                        type="password" 
                        placeholder="password" 
                        width="250px"
                        value={password}
                        onChange={handleOnChangePassword}
                        error={lengthError ? true : (matchError ? true : false)}
                    /><br/>
                    <TextField 
                        type="password" 
                        placeholder="confirm password"
                        width="250px"
                        value={confirmPassword}
                        onChange={handleOnChangeConfirmPassword}
                        error={lengthError ? true : (matchError ? true : false)}
                    />
                </div>
                {matchError ? (<><span className="error">{notMatchedString}</span><br/></>) : null}
                {lengthError ? (<span className="error">{lengthString}</span>) : null}
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