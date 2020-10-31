import React, { useState } from 'react';

interface SizePickProps {
    lineBreak?: boolean;
    onClick?: (size: string) => void;
}

const SizePick: React.FC<SizePickProps> = (props) => {
    const [prevId, setPrevId] = useState<string>('');
    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const handleOnClickSize = (id: string): void => {
        if (prevId !== '') document.getElementById(prevId)!.style.border = '1px solid #ccc'
        document.getElementById(id)!.style.border = '1.1px solid black';
        setPrevId(id);
    }

    return (
        <div className={`center ${props.lineBreak ? "craig wrap" : "margin-bottom"}`}>
            {sizes.map((size, index) => {
                return (
                        <div 
                            className="size-option center unselectable" 
                            key={index}
                            id={`${index.toString()} size${props.lineBreak ? "filter" : ""}`}
                            onClick={() => {
                                if (props.onClick) props.onClick!(size); 
                                handleOnClickSize(`${index.toString()} size${props.lineBreak ? "filter" : ""}`);
                            }}
                        >
                            {size}
                        </div>
                );
            })}
        </div>
    )
}

export default SizePick;