import React from 'react';

// Components
import Navbar from '../Components/Navbar';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

interface NotFoundProps {
    onClickPopup: (option: string) => void;
    cart: number;
}

const NotFound: React.FC<NotFoundProps> = (props) => {
    return (
        <div>
            <Navbar className="dark" onClickPopup={props.onClickPopup} cart={props.cart} />
            <div className="not-found-container center baloo-tamma">
                <div style={{ lineHeight: 0 }}>
                    <p id="not-found">404 not found!</p>
                    <Link className="center total-width no-text-decoration" to="/">
                        <Button 
                            className="relative popup-button go-home" 
                            width={225}
                        >
                            Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default NotFound;