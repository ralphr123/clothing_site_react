import React, { useState } from 'react';

interface ProductProps {
    src: string;
    description: string;
    price: number;
}

const Product: React.FC<ProductProps> = (props) => {
    const [hover, setHover] = useState<boolean>(false);

    const toggleHover = (): void => {
        setHover(!hover);
    }

    return (
        <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} className="product-container center-horizontal">
            <img className="product" src={props.src} alt={props.description} />  
            {/* <div className="expand-container center">
                <span className="expand" >Expand</span>
            </div> */}
            {hover ? (
                <>
                    <div className="product-description center-vertical">
                        <span>{props.description}</span>
                    </div>
                    <div className="product-price center">
                        <span>{`$ ${props.price}`}</span>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Product;