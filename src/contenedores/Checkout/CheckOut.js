import Axios from "axios"
import React, { Component } from "react"
import CheckOutSummary from "../../componentes/Order/CheckOutSummary/CheckOutSummary"
import clases from "./CheckOut.css"
import { Route } from "react-router-dom";
import ContactData from "../../contenedores/Checkout/ContactData/ContactData"
class Checkout extends Component {
    state = {
        ingredients: {
            Salad: 1,
            Bacon: 1,
            Cheese: 1,
            Meat: 1
        },

        price : 0,

    }
    componentWillMount() {
        //aparte de buscar lo q pasas con el query param que es lo que crea? un array o un objeto
        //new URLSearch te devuelve un objeto de lo que tiene la url
        //El metodo entries es para devolver de un objeto varios array con su key y value ej [salad,1]
        const query = new URLSearchParams(this.props.location.search);
        const ingredientss = {}
        for (let param of query.entries()) {
            //["salad","1"]
            //preguntar al pablo por que hace esto !!!
            ingredientss[param[0]] = + param[1]
        }

        
        this.setState({ ingredients: ingredientss })

        const priceBurger = ingredientss.Price
        console.log(priceBurger)
        this.setState({ price: priceBurger })
        console.log(this.state.price)        
        
    }

    cancelcheckout = () => {
        this.props.history.goBack()
    }

    continuecheckout = () => {
        this.props.history.replace("CheckOut/contact-data")
    }

    render() {

      
        return (
            <div className={clases.checkout}>
                <CheckOutSummary
                    ingredients={this.state.ingredients}
                    cancelcheckout={this.cancelcheckout}
                    continuecheckout={this.continuecheckout}
                />

                <Route path={this.props.match.path + "/contact-data"}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} {...props} />)} />
            </div>

        )
    }

}

export default Checkout;