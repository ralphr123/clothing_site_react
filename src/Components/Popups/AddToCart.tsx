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
    onClick: (color: string, size: string, quantity: string) => void;
}

const AddToCart: React.FC<AddToCartProps> = (props) => {
    const [qty, setQty] = useState<string>('1');
    const [color, setColor] = useState<string>('')
    const [size, setSize] = useState<string>('')
    const [error, setError] = useState<boolean>(false);
    const [valid, setValid] = useState<boolean>(true);

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

    const handleOnClickColor = (colorText: string): void => {
        setColor(colorText);
    }
    
    const handleOnClickSize = (sizeText: string): void => {
        setSize(sizeText);
    }

    const validateOptions = (): void => {
        if (color !== '' && size !== '') {
            props.onClick(color, size, qty);
            setValid(true);
        } else {
            setValid(false);
        }
    }

    return (
        <div className="add-to-cart wrap center">
            <img 
                src={props.src} 
                alt="rando" 
                id="product-image"
            />
            <div className="center-text total-height baloo-tamma" >
                <p id="product-title">{props.name}</p>
                <p>Color</p>
                <ColorPick onClick={handleOnClickColor}/>
                <p>Size</p>
                <SizePick onClick={handleOnClickSize} />
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
                {!valid ? (<p style={{ marginTop: 20, marginBottom: 0 }} className="error">Please pick a size and color!</p>) : null}
                <div className="center" style={{ width: '100%' }}>
                    <Button 
                        className="relative popup-button" 
                        width={225}
                        onClick={() => validateOptions()}
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddToCart;
