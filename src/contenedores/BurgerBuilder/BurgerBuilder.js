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
       console.log(this)
        const disableInfo = {
            ...this.props.ings
        }
        
        for (let key in disableInfo) {
           
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSumamary = null;



        let burger = <Spinner />
    //en este if pregunta si el ings esta vacio o no, xq antes lo traia de una base de datos.
    //Ahora le esta preguntando al estado de redux si esta vacio o no y ahora no me muestra la hamburguesa queda
    //el spinner por que no encuentra el estado, entendes lo que quiero decir?          
        if (this.props.ings.ingredients) {
            debugger
            burger = (
                <div>
                    <Burger ingredients={this.props.ings.ingredients} />
                    <BuildControls
                        agregarIngredientes={this.props.onIngredientAdded}
                        borrarIngredientes={this.props.onIngredientRemoved}
                        disable={disableInfo}
                        purchasable={this.state.purchasable}
                        prices={this.state.price}
                        purchasing={this.purchaseHandler}


                    />
                </div>
            )
            /*orderSumamary = <Ordersummary
                ingredients={this.props.ings}
                cancel={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}
                price={this.state.price}
            />*/

        }
        if (this.state.loading) {
            orderSumamary = <Spinner />
        }
    console.log(this.props)
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