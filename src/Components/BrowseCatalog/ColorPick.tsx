import React from 'react';

interface ColorPickProps {
    alot?: boolean;
}

const ColorPick: React.FC<ColorPickProps> = () => {
    const colors: string[] = ['black', 'grey', 'white', 'navy', 'green', 'turquoise', 'yellow', 'pink'];

    return (
        <div className="center margin-bottom">
            {colors.map((color, index) => {
                return (
                    <div className="color-option" style={{backgroundColor: color}} key={index} />
                );
            })}
        </div>
    )
}

export default ColorPick;