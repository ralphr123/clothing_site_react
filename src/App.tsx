import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import { Home, OurBrand, Membership, BrowseCatalog } from './Pages';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App" >
          <Switch>
            <Route path="/our-brand">
              <OurBrand />
              <Footer />
            </Route>
            <Route path="/membership">
              <Membership />
              <Footer />
            </Route>
            <Route path="/browse-catalog">
              <BrowseCatalog />
              <Footer />
            </Route>
            <Route path="/">
              <Home />
              <Footer />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
