import React from 'react';
import Products from '../../Data/Products.json';

// Components
import Product from '../Product';

interface ProductGridProps {
    onClickAddToCart?: (src: string, description: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = (props) => {
    return (
        <div className="product-grid">
            <div className="product-grid-title" >
                <p>WOMEN'S CLOTHING | LUDVIG</p>
                <span>This site is a demo, these are not for sale. All clothing and images belong to Guess.</span>
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
                            onClick={() => props.onClickAddToCart!(product.src, product.description)}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ProductGrid;