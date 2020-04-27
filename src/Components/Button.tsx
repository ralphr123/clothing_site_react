import React from 'react';

interface ButtonProps {
    width: number | string;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div onClick={props.onClick} className={`${props.className} expand-container baloo-tamma center unselectable`} style={{ width: props.width }}>
            <span className="expand" >{props.children}</span>
        </div>
    )
}

export default Button;