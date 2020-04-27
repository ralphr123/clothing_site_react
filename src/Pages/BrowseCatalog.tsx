import React, { useEffect } from 'react';
import FadeIn from 'react-fade-in';
import Navbar from '../Components/Navbar';

// Components
import { ProductGrid, SideMenu, CatalogNavbar } from '../Components/BrowseCatalog';

interface BrowseCatalogProps {
    onClickPopup: (option: string) => void;
    onClickAddToCart?: (src: string, description: string) => void;
}

const BrowseCatalog: React.FC<BrowseCatalogProps> = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
      return (
            <FadeIn>
                <Navbar className="dark" onClickPopup={props.onClickPopup}/>
                <CatalogNavbar />
                <div className="browse-catalog-container mobile wrap center-horizontal">
                    <SideMenu />
                    <ProductGrid onClickAddToCart={props.onClickAddToCart} />
                </div>
            </FadeIn>
    )
}

/*
    1. (Under navbar) Women Men Handbags Shoes Kids
    2. (Left Side: Choices) Denim Dresses Tops Jackets/Coats Sweaters/Hoodies Intimates Swimwear Sale
    3. (Left Side: Filter) Search Color Price
    4. Above catalog brief title & description of selected clothing type
    5. Far right above catalog current page
*/

export default BrowseCatalog;