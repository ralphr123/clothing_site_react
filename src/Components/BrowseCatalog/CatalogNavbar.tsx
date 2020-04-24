import React from 'react';

const CatalogNavbar = () => {
    const marginRight: {marginRight: number} = {marginRight: 10};

    return (
        <div className="catalog-navbar-container full-width">
            <div className="catalog-navbar center full-width unselectable">
                <span id="catalog-navbar-sale" className="mobile-gone">30-50% OFF</span>
                <span id="catalog-navbar-sale-text" className="mobile-gone">Spring Styles</span>
                <span className="catalog-navbar-item">Women</span>
                <span className="catalog-navbar-item">Men</span>
                <span className="catalog-navbar-item">Kids</span>
                <span className="catalog-navbar-item">Handbags</span>
            </div>
        </div>
    )
}

export default CatalogNavbar;