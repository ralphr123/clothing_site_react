import React, { useState } from 'react';

interface ProductProps {
    src: string;
    description: string;
    price?: number;
}

const Product: React.FC<ProductProps> = (props) => {
    const [hover, setHover] = useState<boolean>(false);

    const toggleHover = (): void => {
        setHover(!hover);
    }

    return (
        <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} className="product-container center-horizontal">
            <img className="product" src={props.src} alt={props.description} />  

            {hover ? (
                <>
                    <div className="product-description-container center-vertical">
                        <span className="product-description" >{props.description}</span>
                    </div>
                    <div className="product-price-container center">
                        <span className="product-price" >{`$ ${props.price}`}</span>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Product;