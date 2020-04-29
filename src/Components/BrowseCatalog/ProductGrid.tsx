import React from 'react';
import Products from '../../Data/Products.json';
import { useParams } from 'react-router-dom';

// Components
import Product from '../Product';

interface ProductGridProps {
    onClickAddToCart: (src: string, description: string, price: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = (props) => {
    let { demographic, productType } = useParams();

    return (
        <div className="product-grid">
            <div className="product-grid-title" >
                <p className="uppercase">{demographic}'S {productType} | LUDVIG</p>
                <span>This site is a non-public demo, these are not for sale. All clothing and images belong to Guess.</span>
            </div>
            <div className="wrap flex mobile-center">
                {Products.filter(product => {
                    return (product.demographic === demographic && product.productType === productType);
                }).map((product, index) => {
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
                            onClick={() => props.onClickAddToCart(product.src, product.description, product.price)}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ProductGrid;