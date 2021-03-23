import React, { Component } from "react";

import Burger from "../../componentes/Burger/burger"
import BuildControls from "../../componentes/Burger/BuildControls/BuildControls"
import Modal from "../../componentes/UI/Modal/Modal"
import Ordersummary from "../../componentes/Burger/Ordersummary/Ordersummary"
import axios from "../../axios-orders"
import Spinner from "../../componentes/UI/Spinner/Spinner"
import { Route, NavLink, Switch, Redirect } from "react-router-dom";





const IngridientsPrice = {
    Salad: 50,
    Bacon: 100,
    Cheese: 60,
    Meat: 100
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            Bacon: 0,
            Cheese: 0,
            Meat: 0,
            Salad: 0

        },
        price: 200,

        

        purchasable: false,
        purchasing: false,
        loading: false,
    }
    componentDidMount() {
        /*console.log(this.props)
        
        axios.get("https://react-my-burger-286a5.firebaseio.com/ingredients.json")
        .then((response)=>{
            this.setState({ingredients : response.data})
        .catch((error)=>{
            alert("error en la comunicacion con la base de datos")
    
        })    
            
    
        })*/

    }


    updatePurchaseState = (Ingredients) => {

        const suma = Object.keys(Ingredients)
            .map((key) => {
                return Ingredients[key]

            }).reduce((sum, el) => {
                return sum + el
            }, 0)
        this.setState({ purchasable: suma > 0 })
    }
    agregarIngrediente = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngridients = {
            ...this.state.ingredients
        }
        
        updateIngridients[type] = updateCount;

        const priceAddition = IngridientsPrice[type];
        const oldPrice = this.state.price;
        const totalPrice = oldPrice + priceAddition;

        this.setState({
            price: totalPrice,
            ingredients: updateIngridients
        })
        this.updatePurchaseState(updateIngridients)

    }

    borrarIngrediente = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngridients = {
            ...this.state.ingredients
        }
        updateIngridients[type] = updateCount;

        const priceAddition = IngridientsPrice[type];
        const oldPrice = this.state.price;
        const totalPrice = oldPrice - priceAddition;

        this.setState({
            price: totalPrice,
            ingredients: updateIngridients
        })
        this.updatePurchaseState(updateIngridients)

    }
    purchaseHandler = () => {
        this.setState({ purchasing: true })

    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }
    purchaseContinueHandler = () => {
        //alert("***FALTA LA BASE DE DATOS***")
        
        //*** pregunta ****
        //el metodo push de history es proporcionado por route?
        //ese metodo tiene cargado todas las paginas q yo use con la etiqueta route?
        // el metodo encode es para transformar tolo lo q trae a asqui por si trae algun espacio o un simbolo.
        //el metodo joing une cada elemento que se pushea al array y lo separa con un &
        //++++ pregunta +++++
        //por que el signo de pregunta

        const queryParam = [];
        for (let i in this.state.ingredients) {
            queryParam.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]))
        }

        const priceburger = this.state.price;
        const pricestring= priceburger.toString()
        const queryString = queryParam.join("&");
        
        

        this.props.history.push({
            pathname: "/checkout",
            search: "?" + queryString + "&" + "Price=" + pricestring
        })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        
        for (let key in disableInfo) {
           
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSumamary = null;



        let burger = <Spinner />
              
        if (this.state.ingredients) {
            burger = (
                <div>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        agregarIngredientes={this.agregarIngrediente}
                        borrarIngredientes={this.borrarIngrediente}
                        disable={disableInfo}
                        purchasable={this.state.purchasable}
                        prices={this.state.price}
                        purchasing={this.purchaseHandler}


                    />
                </div>
            )
            orderSumamary = <Ordersummary
                ingredients={this.state.ingredients}
                cancel={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}
                price={this.state.price}
            />

        }
        if (this.state.loading) {
            orderSumamary = <Spinner />
        }

        return (
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSumamary}
                </Modal>
                {burger}
            </div>
        );
    }
}
export default BurgerBuilder;