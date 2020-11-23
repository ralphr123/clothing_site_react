import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Product from '../Product';
import CircularProgress from '@material-ui/core/CircularProgress';

interface ProductGridProps {
    onClickAddToCart: (src: string, description: string, price: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = (props) => {
    let { demographic, productType } = useParams();
    const [productData, setProductData] = useState<{_id: string, description: string, src: string, price: number, widthCont: string, widthImage: string, widthButton: string, contClass: string, contId: string, demographic: string, productType: string}[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    
    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(`https://wicked-phantom-05767.herokuapp.com/https://clothing-site-backend.herokuapp.com/${productType}`);
            const json = await response.json();
            setProductData(json);
            setIsLoading(false);
        }
        loadData();
    }, [productType]);

    return (
        <div className="product-grid">
            <div className="product-grid-title" >
                <p className="uppercase">{demographic}'S {productType} | LUDVIG</p>
                <span>This site is a non-public demo, these are not for sale. All clothing and images belong to Guess.</span>
            </div>
            <div className="wrap flex mobile-center">
            {isLoading ? 
                <div className="center column loader">
                    <CircularProgress className="loader-icon" />
                    <span className="loader-text">Free hosting is slow... Give it a minute!</span>
                </div> 
                : ""}
                {productData.map((product, index) => {
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