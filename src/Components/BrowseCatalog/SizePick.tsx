import React from 'react';

const SizePick = () => {
    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return (
        <div className="center margin-bottom">
            {sizes.map((size, index) => {
                return (
                    <div className="size-option center unselectable" key={index}>
                        {size}
                    </div>
                );
            })}
        </div>
    )
}

export default SizePick;