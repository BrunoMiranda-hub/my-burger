import React from "react"
import Button from "../../UI/Button/Button"
const orderSummary = (props) => {
    

   const ingredientSummary = Object.keys(props.ingredients).map( (ingKey) => {
                                return (
                                <li key= {ingKey}>  {ingKey} : {props.ingredients[ingKey]} </li>
                                )


    } )
//salad:1
            return(
                <div>
                <h3>Su Pedido</h3>    
                <p>Su deliciosa hamburguesa tiene los siguientes Ingredientes:</p>
                <ul>

                {ingredientSummary}

                </ul>
                <p> <strong>El precio total de la Hamburguesa es : {props.price}</strong> </p>
                <p>Continuar Revisando?</p>
                <Button clicked = {props.cancel} btn = "Danger">CANCEL</Button>
                <Button clicked = {props.continue} btn="Success">CONTINUE</Button>
                </div> 
)

}
export default orderSummary