import React, { ChangeEvent } from 'react';

interface TextFieldProps { // ADD NUMBER REGEX PROP
    type: string;
    placeholder: string;
    width: string;
    center?: boolean;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}

const TextField: React.FC<TextFieldProps> = (props) => {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            className={`${props.error ? 'text-field-error' : ''} popup-text-field`}
            style={props.center ? {width: props.width, textAlign: 'center'} : { width: props.width }}
            value={props.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e)}
            autoComplete="off" 
            autoCorrect="off" 
            autoCapitalize="off" 
            spellCheck="false"
        />
    );
}

export default TextField;
