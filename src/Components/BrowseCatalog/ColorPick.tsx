import React, { ReactElement } from 'react';

interface ColorPickProps {
    alot: boolean;
}

const ColorPick: React.FC<ColorPickProps> = (props) => {
    const colors: string[] = ['black', 'grey', 'white', 'navy', 'green', 'turquoise', 'yellow', 'pink'];

    return (
        <div className="center margin-bottom">
            {colors.map(color => {
                return (
                    <div className="color-option" style={{backgroundColor: color}} />
                );
            })}
        </div>
    )
}

export default ColorPick;