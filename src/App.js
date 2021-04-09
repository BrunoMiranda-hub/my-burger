import React, { Component } from 'react';
import Diseno from "./componentes/Diseno/Diseno";
//import BurgerBuilder from "./contenedores/BurgerBuilder/BurgerBuilder"
import CheckOut from "../src/contenedores/Checkout/CheckOut"
import {BrowserRouter} from "react-router-dom"
import { Route, Switch } from "react-router-dom";
import Orders from "../src/contenedores/Orders/Orders"
import connectBurger from "./Store/connectBurger"

class App extends Component {
  render() {
    return (
      
      <div >

        
        <BrowserRouter>
          <Diseno>

            <Switch>
              <Route exact path="/" component = {connectBurger}/>
              <Route path ="/Orders" component ={Orders}/>
              <Route path="/CheckOut" component = {CheckOut}/>
            </Switch>

          </Diseno>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
