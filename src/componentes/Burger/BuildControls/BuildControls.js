import React from "react";
import clases from "./BuildControls.css";
import BuildControl from "../../Burger/BuildControls/BuildControl/BuildControl"

const controls = [
    {label: "Salad" , type: "Salad"},
    {label: "Bacon" , type: "Bacon"},
    {label: "Cheese" , type: "Cheese"},
    {label: "Meat" , type: "Meat"}
]

//se usa .toFixed(2) para aproximar los decimales a dos ej: props.prices.toFixed(2)
const buildControls = (props)=>{
    return(
        <div className={clases.BuildControls}>
            <p> Precio Burger : <strong>{props.prices}</strong> </p>
            {controls.map( (ctr) => {
                return <BuildControl 
                key = {ctr.label} 
                label ={ctr.label} 
                agregar = {()=>props.agregarIngredientes(ctr.type)}
                borrar = {()=>props.borrarIngredientes(ctr.type)}
                
                disable = {props.disable[ctr.type]}
                />
            })}
    
            <button 
            className = {clases.OrderButton}
            disabled = { !props.purchasable}
            onClick = {props.purchasing}
            >ORDER NOW</button>

        </div>
    )
}
export default buildControls;