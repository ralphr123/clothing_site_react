import React, { useState } from 'react';

interface ColorPickProps {
    lineBreak?: boolean;
    onClick?: (color: string) => void;
}

const ColorPick: React.FC<ColorPickProps> = (props) => {
    const [prevId, setPrevId] = useState<string>('');
    const colors: string[] = ['Black', 'Grey', 'White', 'Navy', 'Green', 'Turquoise', 'Gold', 'Pink'];

    const handleOnClickColor = (id: string): void => {
        if (prevId !== '') document.getElementById(prevId)!.style.border = '1.25px solid #ccc';
        document.getElementById(id)!.style.border = '1.5px solid black';
        setPrevId(id);
    }

    return (
        <div className={`center ${props.lineBreak ? "craig wrap" : "margin-bottom"}`}>
            {colors.map((color, index) => {
                return (
                    <>
                        <div 
                            className="color-option" 
                            style={{backgroundColor: color}} 
                            key={index}
                            id={`${index.toString()} color${props.lineBreak ? "filter" : ""}`}
                            onClick={() => {
                                if (props.onClick) props.onClick!(color); 
                                handleOnClickColor(`${index.toString()} color${props.lineBreak ? "filter" : ""}`);
                            }}
                        />
                    </>
                );
            })}
        </div>
    )
}

export default ColorPick;