import React from 'react';
import FadeIn from 'react-fade-in';
import Navbar from '../Components/Navbar';

// Components
import { ProductGrid, SideMenu } from '../Components/BrowseCatalog';

const BrowseCatalog = () => {
    return (
            <FadeIn>
                <Navbar className="dark" />
                <div className="browse-catalog-container mobile wrap center-horizontal">
                    <SideMenu />
                    <ProductGrid />
                </div>
            </FadeIn>
    )
}

/*
    1. (Under navbar) Women Men Hanbags Shoes Kids
    2. (Left Side: Choices) Denim Dresses Tops Jackets/Coats Sweaters/Hoodies Intimates Swimwear Sale
    3. (Left Side: Filter) Search Color Price
    4. Above catalog brief title & description of selected clothing type
    5. Far right above catalog current page
*/

export default BrowseCatalog;