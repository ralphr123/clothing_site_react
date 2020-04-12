import React, { useState } from 'react';

interface ProductProps {
    src: string;
    description: string;
    price: number;
}

const Product: React.FC<ProductProps> = (props) => {
    const [hover, setHover] = useState<boolean>(false);

    const toggleHover = (): void => {
        // setHover(!hover);
    }

    return (
        <div className="product-container center-horizontal">
            <img className="product" src={props.src} alt={props.description} />  
            <div className="expand-container center">
                <span className="expand" >ADD TO CART</span>
            </div>
            <div className="product-description center">
                <span>{`${props.description} - $ ${props.price}`}</span>
            </div>
        </div>
    )
}

export default Product;