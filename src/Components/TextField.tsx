import React from 'react';

interface TextFieldProps { // ADD NUMBER REGEX PROP
    type: string;
    placeholder: string;
    width: string;
    center?: boolean;
}

const TextField: React.FC<TextFieldProps> = (props) => {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            className="popup-text-field"
            style={props.center ? {width: props.width, textAlign: 'center'} : { width: props.width }}
        />
    );
}

export default TextField;
