import React from 'react';
import Products from '../../Data/Products.json';

// Components
import Product from '../Product';

const ProductGrid = () => {
    const testAdress: string = "https://res.cloudinary.com/guess-img/image/upload/w_600,h_807,c_fill,g_auto/f_auto,q_auto/fl_strip_profile/v1/NA/Style/ECOMM/W0GAB4D2KM4-DRAY-ALT1";

    return (
        <div className="product-grid wrap center-horizontal">
            {Products.map((product, index) => {
                return (
                    <Product 
                        description={product.description}
                        src={product.src}
                        price={product.price}
                        widthCont={product.widthCont}
                        widthButton={product.widthButton}
                        widthImage={product.widthImage}
                        contClass={product.contClass}
                        contId={product.contId}
                        key={index}
                    />
                )
            })}
        </div>
    );
}

export default ProductGrid;