import React from 'react';

// Components
import Product from '../Product';
import { Link } from 'react-router-dom';

interface NewArrivalsProps {
  onClickAddToCart: (src: string, description: string, price: number) => void;
}

const NewArrivals: React.FC<NewArrivalsProps> = (props) => {
  return (
    <div>
      <div className="new-arrivals flex">
          <span className="header center">New Arrivals</span>
          <div className="products-container center full-width">
            <Product //
              src="https://i.ibb.co/9cCGLZK/1583374187192648779-removebg-preview.png" 
              description="Applique Long Cargo Jogger Pants - Black" 
              price={39.99}
              widthCont="25%"
              widthImage="80%"
              widthButton={250}
              onClick={() => props.onClickAddToCart('https://i.ibb.co/9cCGLZK/1583374187192648779-removebg-preview.png', 'Applique Long Cargo Jogger Pants', 39.99)}
            />
            <Product 
              src="https://i.ibb.co/qx7KfkL/1589388731551338004-removebg-preview.png"
              description="Dragon Print Short Sleeves Longline Tee" 
              price={49.99}
              widthCont="25%"
              widthImage="80%"
              widthButton={250}
              onClick={() => props.onClickAddToCart('https://i.ibb.co/qx7KfkL/1589388731551338004-removebg-preview.png', 'Dragon Print Short Sleeves Longline Tee', 49.99)}
            />
            <Product 
              src="https://i.ibb.co/Xpz7Wxv/1583115763046386539-removebg-preview-1.png"
              description="Embroidery Letter Drawstring Jogger Sweatpants" 
              price={29.99}
              widthCont="25%"
              widthImage="80%"
              widthButton={250}
              onClick={() => props.onClickAddToCart('https://i.ibb.co/Xpz7Wxv/1583115763046386539-removebg-preview-1.png', 'Embroidery Letter Drawstring Jogger Sweatpants', 29.99)}
            />
            <Product 
              src="https://i.ibb.co/4p8dF4d/1588641727700303590-removebg-preview.png"
              description="Palm Tree Print Beach Vacation Shirt" 
              price={29.99}
              widthCont="25%"
              widthImage="80%"
              widthButton={250}
              onClick={() => props.onClickAddToCart('https://i.ibb.co/4p8dF4d/1588641727700303590-removebg-preview.png', 'Palm Tree Print Beach Vacation Shirt', 29.99)}
            />
          </div>
      </div>
      <div className="full-width center">
        <Link className="browse-catalog-button baloo-tamma unselectable center no-text-decoration" to="/browse-catalog/women/apparel">
          <span className="expand" >BROWSE CATALOG</span>
        </Link>
      </div>
    </div>
  );
}

export default NewArrivals;
