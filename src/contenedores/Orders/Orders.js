import React, {Component} from "react"
import Order from "../../componentes/Order/Order"
import clases from "./Orders.css"
import axios from "../../axios-orders"
class Orders extends Component{

    state={
        orders:[],
        loading:true,
    }

    componentDidMount(){
        axios.get("/orders.json")
        .then(res=>{
           const ingredients = []
           for(let key in res.data){
               ingredients.push({...res.data[key]})
               
           }
           console.log(ingredients)
           this.setState({orders:ingredients,loading:false})
        })
        .catch(err=>{

        })

    }

    render(){
        return (
            <div className = {clases.Orders}>
                {this.state.orders.map((order)=>{
                    return(
                        <Order ingredients ={order.ingredients}  />
                    )
                    
                })}
            </div>
        )
    }

}


export default Orders