import React from 'react';

// Components
import Product from '../Product';
import { Link } from 'react-router-dom';

interface NewArrivalsProps {
  onClickAddToCart: (src: string, description: string) => void;
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
              onClick={() => props.onClickAddToCart('https://i.ibb.co/9cCGLZK/1583374187192648779-removebg-preview.png', 'Applique Long Cargo Jogger Pants')}
            />
            <Product 
              src="https://i.ibb.co/NF7Jb56/1575000934357465739-removebg-preview.png"
              description="Ribbed Hem Zip Fluffy Teddy Jacket - Aqua" 
              price={69.99}
              widthCont="25%"
              widthImage="80%"
              widthButton={250}
              onClick={() => props.onClickAddToCart('https://i.ibb.co/NF7Jb56/1575000934357465739-removebg-preview.png', 'Ribbed Hem Zip Fluffy Teddy Jacket')}
            />
            <Product 
              src="https://i.ibb.co/7yNDCN0/1574039264620218557-removebg-preview.png"
              description="Faux Shearling Suede Waistcoat - Camel Brown" 
              price={89.99}
              widthCont="25%"
              widthImage="80%"
              widthButton={250}
              onClick={() => props.onClickAddToCart('https://i.ibb.co/7yNDCN0/1574039264620218557-removebg-preview.png', 'Faux Shearling Suede Waistcoat')}
            />
            <Product 
              src="https://i.ibb.co/vq4KrCN/1562035473987026250-removebg-preview.png"
              description="Contrast Trim Cami And Shorts Set" 
              price={29.99}
              widthCont="25%"
              widthImage="80%"
              widthButton={250}
              onClick={() => props.onClickAddToCart('https://i.ibb.co/vq4KrCN/1562035473987026250-removebg-preview.png', 'Contrast Trim Cami And Shorts Set')}
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
