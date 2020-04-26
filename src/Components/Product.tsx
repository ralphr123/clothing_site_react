import React from 'react';

// Components
import Button from './Button';

interface ProductProps {
    src: string;
    description: string;
    price: number;
    widthCont?: string;
    widthImage?: string;
    widthButton: number | string;
    contClass?: string;
    contId?: string;
}

const Product: React.FC<ProductProps> = (props) => {
    return (
        <div className={`product-container center-horizontal ${props.contClass}`} id={props.contId} style={{ width: props.widthCont }}>
            <img className="product" src={props.src} style={{ width: props.widthImage }} alt={props.description} />  
            <Button className="absolute" width={props.widthButton}>ADD TO CART</Button>
            <div className="product-description center">
                <span>{`${props.description} - $ ${props.price}`}</span>
            </div>
        </div>
    )
}

export default Product;