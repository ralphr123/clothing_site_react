import React from 'react';

interface ProductProps {
    src: string;
    description: string;
    price: number;
    widthCont?: string;
    widthImage?: string;
    widthButton?: number | string;
    contClass?: string;
    contId?: string;
}

const Product: React.FC<ProductProps> = (props) => {
    return (
        <div className={`product-container center-horizontal ${props.contClass}`} id={props.contId} style={{ width: props.widthCont }}>
            <img className="product" src={props.src} style={{ width: props.widthImage }} alt={props.description} />  
            <div className="expand-container baloo-tamma center" style={{ width: props.widthButton }}>
                <span className="expand" >ADD TO CART</span>
            </div>
            <div className="product-description center">
                <span>{`${props.description} - $ ${props.price}`}</span>
            </div>
        </div>
    )
}

export default Product;