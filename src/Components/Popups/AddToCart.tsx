import React, {useState, ChangeEvent} from 'react';

// Components
import { ColorPick, SizePick } from '../BrowseCatalog';
import TextField from '../TextField';
import Button from '../Button';

// Icons
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


interface AddToCartProps {
    src?: string;
    name?: string;
}

const AddToCart: React.FC<AddToCartProps> = (props) => {
    const [qty, setQty] = useState<string>('1');
    const [error, setError] = useState<boolean>(false);

    const regex = /^[1-9]\d*$/;

    const handleOnChangeQuantity = (e: ChangeEvent<HTMLInputElement>): void => {
        if (!regex.test(e.target.value)) {
            setError(true);
        } else {
            setQty(e.target.value);
            setError(false);
        }
    }

    const handleOnClickPlus = (): void => {
        if (regex.test((Number(qty) + 1).toString())) {
            setQty((Number(qty) + 1).toString())
        } 
    }
    
    const handleOnClickMinus = (): void => {
        if (regex.test((Number(qty) - 1).toString())) {
            setQty((Number(qty) - 1).toString())
        }
    }

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
                <ColorPick />
                <p>Size</p>
                <SizePick />
                <p>Quantity</p>
                <div className="center">
                    <RemoveIcon className="change-qty" onClick={handleOnClickMinus} />
                    <TextField 
                        placeholder="" 
                        type="text" 
                        width="50px" 
                        center
                        onChange={handleOnChangeQuantity}
                        value={qty}
                        error={error}
                    /><AddIcon className="change-qty" onClick={handleOnClickPlus} />
                </div>
                <div className="center" style={{ width: '100%' }}>
                    <Button className="relative popup-button" width={225}>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}

export default AddToCart;
