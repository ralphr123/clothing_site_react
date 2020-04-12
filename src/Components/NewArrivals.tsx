import React from 'react';
import '../App.css';

// Components
import { Product } from '.';


const NewArrivals = () => {
  return (
    <div>
      <div className="new-arrivals flex">
          <span className="header center">New Arrivals</span>
          <div className="products-container center">
            <Product //
              src="https://i.ibb.co/9cCGLZK/1583374187192648779-removebg-preview.png" 
              // https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2020/01/09/goods-img/1583374187534358903.jpg
              description="Applique Long Cargo Jogger Pants - Black" 
              price={39.99}
            />
            <Product 
              src="https://i.ibb.co/NF7Jb56/1575000934357465739-removebg-preview.png"
              // https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/10/14/goods-img/1575000934115360598.jpg
              description="Ribbed Hem Zip Fluffy Teddy Jacket - Aqua" 
              price={69.99}
            />
            <Product 
              src="https://i.ibb.co/7yNDCN0/1574039264620218557-removebg-preview.png"
              // https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/10/08/goods-img/1574039264499655613.jpg
              description="Faux Shearling Suede Waistcoat - Camel Brown" 
              price={89.99}
            />
            <Product 
              src="https://i.ibb.co/vq4KrCN/1562035473987026250-removebg-preview.png"
              // https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/04/16/goods-img/1562035473870382799.jpg
              description="Contrast Trim Cami And Shorts Set" 
              price={29.99}
            />
          </div>
      </div>
      <div className="browse-container">
        <div className="browse-catalog-button center">
          <span className="expand" >BROWSE CATALOG</span>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
