import React, { ReactElement } from 'react';

const SizePick = () => {
    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return (
        <div className="center margin-bottom">
            {sizes.map(size => {
                return (
                    <div className="size-option center unselectable">
                        {size}
                    </div>
                );
            })}
        </div>
    )
}

export default SizePick;