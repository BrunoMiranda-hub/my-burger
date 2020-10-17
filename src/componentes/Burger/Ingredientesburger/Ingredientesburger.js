import React, { Component } from "react";
import clases from "./Ingredientesburger.css";
import PropTypes from "prop-types"

class IngredientesBurger extends Component{
  render(){
    let ingredientes = null;

    switch(this.props.type){
        case("BreadBottom"):
          ingredientes = <div className = {clases.BreadBottom}></div>

        break
    
        case("BreadTop"):
        ingredientes =(<div className={clases.BreadTop}>
                          <div className = {clases.Seeds1}></div>
                          <div className = {clases.Seeds2}></div>
                      </div> )

        break

        case("Meat"):
        ingredientes = <div className={clases.Meat}></div>

        break

        case ("Bacon"):

        ingredientes = <div className={clases.Bacon}></div>

        break

        case("Cheese"):
        ingredientes = <div className={clases.Cheese}></div>

        break
        
        case ("Salad"):
        ingredientes = <div className={clases.Salad}></div>;

        break

        default:
          ingredientes = null;

        }
    return ingredientes;

  };
}
IngredientesBurger.PropTypes = {
  type: PropTypes.string.isRequired
}


export default IngredientesBurger;