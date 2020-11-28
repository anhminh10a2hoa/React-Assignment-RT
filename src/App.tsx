import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadAllManufacturers } from './api/api';
import Buttons from './components/Buttons/Buttons';
import Items from './components/Items/Items';


import './App.css';

let listOfProductsAndManufacturer: any = {};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllManufacturers().then((res) => {
      listOfProductsAndManufacturer = res;
    }).then(() => {
      setLoading(false);
    })
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1 className="title">Welcome to Reaktor's warehouses</h1>
            <Buttons />
          </Route>
          <Route exact path="/:category">
            {loading ? (<p>We need to load all of manufacturers first, please waiting...</p>) : (<React.Fragment>
              <h1 className="title">Listing page</h1>
              <Buttons />
              <Items search={window.location.search} listOfProductsAndManufacturer={listOfProductsAndManufacturer}/>
            </React.Fragment>)}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
