import React, { useState, useEffect } from 'react';

// Components
import Dialog from '@material-ui/core/Dialog';
import { SignUp, Login } from './Popups';
import FadeIn from 'react-fade-in';

interface PopupProps {
    onClose: () => void;
    open: boolean;
    option: string;
}

const Popup: React.FC<PopupProps> = (props) => {
    const [option, setOption] = useState<string>(props.option);

    useEffect(() => {
        setOption(props.option);
    }, [props.option])

    const handleOnClickLogin = () => {
        setOption('login');
    }

    const handleOnClickSignUp = () => {
        setOption('signup');
    }

    return (
        <Dialog 
            onClose={props.onClose} 
            open={props.open}
            maxWidth="xl" 
        >
            {(option === 'signup') ? <FadeIn><SignUp onClickLogin={handleOnClickLogin} /></FadeIn> : null}
            {(option === 'login') ? <FadeIn><Login onClickSignUp={handleOnClickSignUp} /></FadeIn> : null}
        </Dialog>
    )
}

export default Popup;

/*
            <DialogActions className="full-size end-end">
                <Button autoFocus onClick={props.onClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
*/