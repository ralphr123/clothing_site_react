import React from 'react';

interface ProductProps {
    src: string;
    description: string;
    price: number;
}

const Product: React.FC<ProductProps> = (props) => {
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