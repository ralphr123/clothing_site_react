import React from 'react';

interface CartItemProps {
    src: string;
    description: string;
    quantity: string;
    color: string;
    size: string;
}

const CartItem: React.FC<CartItemProps> = (props) => {
    return (
        <div className="cart-item-container center-vertical">
            <img src={props.src} className="cart-item-image" alt="cart item" />
            <div className="cart-info-container">
                <p className="cart-item-title">{props.description}</p>
                <p className="cart-item">Quantity: {props.quantity}</p>
                <p className="cart-item">Size: {props.size}</p>
                <div className="center-vertical">
                    <span className="cart-item">Color: {props.color} &nbsp;</span><div className="color-option color-option-cart" style={{ background: props.color }} />
                </div>
            </div>
        </div>
    )
}

export default CartItem;