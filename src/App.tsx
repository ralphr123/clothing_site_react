import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import { Home, OurBrand, Membership, BrowseCatalog } from './Pages';
import Footer from './Components/Footer';
import Popup from './Components/Popup';

const App = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [option, setOption] = useState<string>('')

  const handleOnClickPopup = (optionText: string): void => {
    setIsOpenPopup(true);
    setOption(optionText);
  }

  const handleOnClosePopup = (): void => {
    setIsOpenPopup(false);
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
              <BrowseCatalog onClickPopup={handleOnClickPopup} />
              <Footer />
            </Route>
            <Route path="/">
              <Home onClickPopup={handleOnClickPopup} />
              <Footer />
            </Route>
          </Switch>
          <Popup onClose={handleOnClosePopup} open={isOpenPopup} option={option} />
      </div>
    </Router>
  );
}

export default App;
