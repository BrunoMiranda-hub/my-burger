import React from "react"
import clases from "./Order.css"
const order =(props)=>{

    const ingredients = []

    for(let key in props.ingredients){

        ingredients.push(
            {name:key,
            amount:props.ingredients[key]
            })
    }


    const suma = ingredients.map((ing)=>{
        return(
            <span> {ing.name} {ing.amount} </span>
        )
    })

    return(
        <div className = {clases.order}>
            <p>Ingredients: {suma} </p>
            <p>Price <strong>$550</strong></p>
        </div>
    )
    

}
export default order
