import React, {Component} from "react";

import Burger from "../../componentes/Burger/burger"
import BuildControls from "../../componentes/Burger/BuildControls/BuildControls"
import Modal from "../../componentes/UI/Modal/Modal"
import Ordersummary from "../../componentes/Burger/Ordersummary/Ordersummary"
import axios from "../../axios-orders"
import Spinner from "../../componentes/UI/Spinner/Spinner"


const IngridientsPrice = { 
    Salad : 50,
    Bacon : 100,
    Cheese : 60,
    Meat : 100
}

class BurgerBuilder extends Component{
    state ={
        ingredients : null,
        price : 200,

        purchasable : false,
        purchasing : false,
        loading : false,
    }
componentDidMount(){
    axios.get("https://react-my-burger-286a5.firebaseio.com/ingredients.json")
    .then((response)=>{
        this.setState({ingredients : response.data})
        

    })
    
}


 updatePurchaseState = (Ingredients)=>{

   const suma = Object.keys(Ingredients)
                    .map((key)=>{
                        return Ingredients[key]

                    }).reduce((sum, el)=>{
                        return sum + el 
                    },0)
   this.setState({purchasable : suma > 0})
 }   
 agregarIngrediente = (type)=>{
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngridients = {
        ...this.state.ingredients
    }
    //esto no sabia que se podia hacer(asi se le asigna valor en un objeto)
    updateIngridients[type] = updateCount;

    const priceAddition = IngridientsPrice[type];
    const oldPrice = this.state.price;
    const totalPrice = oldPrice + priceAddition;
    
    this.setState({
        price: totalPrice,
        ingredients : updateIngridients
    })
    this.updatePurchaseState(updateIngridients)

 } 

 borrarIngrediente = (type)=>{
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
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
        ingredients : updateIngridients
    })
    this.updatePurchaseState(updateIngridients)

 }
  purchaseHandler = ()=>{
      this.setState({purchasing : true})
      
  }

  purchaseCancelHandler = ()=>{
      this.setState({purchasing : false})
  }
  purchaseContinueHandler = () =>{
      //alert("***FALTA LA BASE DE DATOS***")
      this.setState({loading : true})
      const order ={
          ingredients : this.state.ingredients,
          precio: this.state.price,
          cliente:{
                    nombre:"Homero Simpsons",
                    direccion:{
                            calle:"Avenida Siempreviva",
                            numero:"742",
                            pais:"Estados Unidos"
                            },
                    email:"homersimpsons@gmail.com"  
        },

          deliveryMethod:"fastest",
    }
      axios.post(`/orders.json`, order)
           .then((response)=>{
                this.setState({loading : false, purchasing:false})
           })
           .catch((error)=>{
                this.setState({loading : false,purchasing:false})
           })
      }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        }
        //es igual que el .map nad amas q en los objetos!!!
    for(let key in disableInfo){
        disableInfo[key] = disableInfo[key] <= 0
    }
    let orderSumamary = null;
    

    
    let burger = <Spinner/> 
    //no entiendo por que en el if pregunta eso!!       
        if(this.state.ingredients){
            burger = (
                <div> 
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    agregarIngredientes = {this.agregarIngrediente} 
                    borrarIngredientes = {this.borrarIngrediente}
                    disable = {disableInfo}
                    purchasable={this.state.purchasable}
                    prices = {this.state.price}
                    purchasing = {this.purchaseHandler}
                    
        
                />
                </div>
                )
                orderSumamary = <Ordersummary 
                                    ingredients = {this.state.ingredients} 
                                    cancel = {this.purchaseCancelHandler}
                                    continue ={this.purchaseContinueHandler}
                                    price = {this.state.price}
                                />

        }
        if(this.state.loading){
            orderSumamary = <Spinner/>
        }

        return(
            <div>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                {orderSumamary}
                </Modal>
               {burger}
               </div>
        );
    }
}
export default BurgerBuilder;