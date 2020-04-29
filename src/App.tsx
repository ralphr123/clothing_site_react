import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';

// Pages
import { Home, OurBrand, Membership, BrowseCatalog, NotFound } from './Pages';
import Footer from './Components/Footer';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Components
import { SignUp, Login, AddToCart, Cart } from './Components/Popups';
import Dialog from '@material-ui/core/Dialog';
import FadeIn from 'react-fade-in';

const App = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [option, setOption] = useState<string>('')
  const [productData, setProductData] = useState<{src: string, description: string}>({src: '', description: ''});
  const [cart, setCart] = useState<{src: string, description: string, color: string, size: string, qty: string}[]>([])

  const handleOnClickPopup = (optionText: string): void => {
    setIsOpenPopup(true);
    setOption(optionText);
  }

  const handleOnClosePopup = (): void => {
    setIsOpenPopup(false);
  }

  const handleOnClickLogin = (): void => {
    setOption('login');
}

  const handleOnClickSignUp = (): void => {
    setOption('signup');
  }

  const handleOnClickAddToCart = (srcText: string, descriptionText: string): void => {
    handleOnClickPopup('addtocart');
    setProductData({src: srcText, description: descriptionText});
  }

  const handleAddToCart = (colorText: string, sizeText: string, quantityText: string): void => {
    setCart(cart => [...cart, {
      src: productData.src, 
      description: productData.description,
      color: colorText,
      size: sizeText,
      qty: quantityText
    }]);
    handleOnClosePopup();
  }

  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route path="/our-brand">
            <OurBrand onClickPopup={handleOnClickPopup} cart={cart.length} />
            <Footer />
          </Route>
          <Route path="/membership">
            <Membership onClickPopup={handleOnClickPopup} cart={cart.length} />
            <Footer />
          </Route>
          <Route path="/browse-catalog/:demographic/:productType">
            <BrowseCatalog onClickPopup={handleOnClickPopup} onClickAddToCart={handleOnClickAddToCart} cart={cart.length} />
            <Footer />
          </Route>
          <Route path="/">
            <Home onClickPopup={handleOnClickPopup} onClickAddToCart={handleOnClickAddToCart} cart={cart.length} />
            <Footer />
          </Route>
          {/* <Route path="index.html">
            <Redirect exact to="/" />
          </Route>
          <Route path="*">
            <NotFound onClickPopup={handleOnClickPopup} cart={cart.length} />
            <Footer />
          </Route> */}
        </Switch>
        <Dialog 
          onClose={handleOnClosePopup} 
          open={isOpenPopup}
          maxWidth="xl" 
        >
          <CloseIcon id="popup-close" onClick={handleOnClosePopup} />
          {(option === 'signup') ? <FadeIn><SignUp onClickLogin={handleOnClickLogin} /></FadeIn> : null}
          {(option === 'login') ? <FadeIn><Login onClickSignUp={handleOnClickSignUp} /></FadeIn> : null}
          {(option === 'addtocart') ? <FadeIn><AddToCart src={productData.src} name={productData.description} onClick={handleAddToCart} /></FadeIn> : null}
          {(option === 'cart') ? <FadeIn><Cart handleClosePopup={handleOnClosePopup} cart={cart} /></FadeIn> : null}
        </Dialog>
      </div>
    </Router>
  );
}

export default App;
