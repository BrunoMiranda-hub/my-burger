import React, { Component } from 'react';
import Diseno from "./componentes/Diseno/Diseno";
import BurgerBuilder from "./contenedores/BurgerBuilder/BurgerBuilder"
import CheckOut from "../src/contenedores/Checkout/CheckOut"

class App extends Component {
  render() {
    return (
      <div >
        <Diseno> 
          
           <BurgerBuilder/>
           <CheckOut/>
          
        </Diseno>
      </div>
    );
  }
}

export default App;
