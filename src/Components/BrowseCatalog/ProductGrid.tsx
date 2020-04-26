import React from 'react';
import Products from '../../Data/Products.json';

// Components
import Product from '../Product';

const ProductGrid = () => {
    return (
        <div className="product-grid">
            <div className="product-grid-title" >
                <p>WOMEN'S CLOTHING | LUDVIG</p>
                <span>This site is a demo, these are not for sale. All clothing and images belongs to Guess.</span>
            </div>
            <div className="wrap flex mobile-center">
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
        </div>
    );
}

export default ProductGrid;