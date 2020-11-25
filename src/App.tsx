import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Buttons from './components/Buttons/Buttons';
import Items from './components/Items/Items';


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1 className="title">Listing page</h1>
            <Buttons />
          </Route>
          <Route exact path="/search">
            <h1 className="title">Listing page</h1>
            <Buttons />
            <Items location={window.location}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
