import React, { useState, ChangeEvent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import { Home, OurBrand, Membership, BrowseCatalog } from './Pages';
import Footer from './Components/Footer';

// Components
import { SignUp, Login, AddToCart } from './Components/Popups';
import Dialog from '@material-ui/core/Dialog';
import FadeIn from 'react-fade-in';

const App = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [option, setOption] = useState<string>('')
  const [productData, setProductData] = useState<{src: string, description: string}>({src: '', description: ''});
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
  }
  
  const handleOnChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement> ) => {
      setConfirmPassword(e.target.value);
      console.log(confirmPassword);
  }

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
    console.log(option);
    console.log(productData.src);
  }

  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route path="/our-brand">
            <OurBrand onClickPopup={handleOnClickPopup} />
            <Footer />
          </Route>
          <Route path="/membership">
            <Membership onClickPopup={handleOnClickPopup} />
            <Footer />
          </Route>
          <Route path="/browse-catalog">
            <BrowseCatalog onClickPopup={handleOnClickPopup} onClickAddToCart={handleOnClickAddToCart} />
            <Footer />
          </Route>
          <Route path="/">
            <Home onClickPopup={handleOnClickPopup} />
            <Footer />
          </Route>
        </Switch>
        <Dialog 
          onClose={handleOnClosePopup} 
          open={isOpenPopup}
          maxWidth="xl" 
        >
          {(option === 'signup') ? <FadeIn><SignUp onClickLogin={handleOnClickLogin} /></FadeIn> : null}
          {(option === 'login') ? <FadeIn><Login onClickSignUp={handleOnClickSignUp} /></FadeIn> : null}
          {(option === 'addtocart') ? <FadeIn><AddToCart src={productData.src} name={productData.description} /></FadeIn> : null}
        </Dialog>
      </div>
    </Router>
  );
}
// onChangePassword={handleOnChangePassword} onChangeConfirmPassword={handleOnChangeConfirmPassword} password={password} confirmPassword={confirmPassword} 
export default App;
