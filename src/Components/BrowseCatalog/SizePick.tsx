import React, { useState } from 'react';

interface SizePickProps {
    onClick: (size: string) => void;
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
        <div className="center margin-bottom">
            {sizes.map((size, index) => {
                return (
                    <div 
                        className="size-option center unselectable" 
                        key={index}
                        id={`${index.toString()} size`}
                        onClick={() => {props.onClick(size); handleOnClickSize(`${index.toString()} size`)}}
                    >
                        {size}
                    </div>
                );
            })}
        </div>
    )
}

export default SizePick;