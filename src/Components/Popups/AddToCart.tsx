import React from 'react';

// Components
import { ColorPick, SizePick } from '../BrowseCatalog';
import TextField from '../TextField';
import Button from '../Button';


interface AddToCartProps {
    src?: string;
    name?: string;
}

const AddToCart: React.FC<AddToCartProps> = (props) => {
    return (
        <div className="add-to-cart wrap flex center">
            <img 
                src={props.src} 
                alt="rando" 
                id="product-image"
            />
            <div className="center-text total-height baloo-tamma" >
                <p id="product-title">{props.name}</p>
                <p>Color</p>
                <ColorPick alot={false} />
                <p>Size</p>
                <SizePick />
                <p>Quantity</p>
                <TextField placeholder="" type="text" width="50px" center/>
                <div className="center" style={{ width: '100%' }}>
                    <Button className="relative popup-button" width={225}>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}

export default AddToCart;
