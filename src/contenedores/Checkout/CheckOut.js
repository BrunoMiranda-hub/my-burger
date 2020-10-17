import Axios from "axios"
import React,{Component} from "react" 
import CheckOutSummary from "../../componentes/Order/CheckOutSummary/CheckOutSummary"

class Checkout extends Component{
    state = {
        ingredients : {
            Salad : 1,
            Bacon : 1,
            Cheese: 1,
            Meat : 1
        }
        
    }
    //componentDidMount(){
      //  Axios.get("https://react-my-burger-286a5.firebaseio.com/orders.json")
        //.then((response)=>{
          //  console.log(response)
       // })

    //}
   
    render(){
        
        
        return(
            <div>
                <CheckOutSummary ingredients = {this.state.ingredients}/>
            </div>
        )
    }

}

export default Checkout;