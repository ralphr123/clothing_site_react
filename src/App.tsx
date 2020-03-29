import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <div className="App" >
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
