import React from 'react';

// Components
import Button from '../Button';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

interface CartProps {
    cart: {src: string, description: string, color: string, size: string, qty: string}[];
    handleClosePopup: () => void;
}

const Cart: React.FC<CartProps> = (props) => {
    return (
        <div className="add-to-cart wrap center-text">
            <p className="popup-title">Cart</p>
            {props.cart.length === 0 ? (
                <>
                    <p>Uh oh, looks like your cart is empty!</p>
                    <div className="total-width center">
                        <Link onClick={props.handleClosePopup} to="/browse-catalog" className="no-text-decoration">
                            <Button 
                                width={200}
                                className="relative popup-button" 
                            >
                                Browse Catalog
                            </Button>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                {props.cart.map((item, index) => {
                    return (
                        <CartItem 
                            src={item.src}
                            description={item.description}
                            quantity={item.qty}
                            size={item.size}
                            color={item.color}
                            key={index}
                        />
                    );
                })}
                <div className="total-width center">
                    <Button 
                        width={200}
                        className="relative popup-button" 
                    >
                        Checkout
                    </Button>
                </div>
                </>
            )}
        </div>
    );
}

export default Cart;