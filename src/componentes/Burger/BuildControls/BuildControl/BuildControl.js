import React from "react";
import clases from "./BuildControl.css"

const buildControl = (props) => {
    return(

    <div className = {clases.BuildControl}>

        <div className={clases.Label} >{props.label}</div>

        <button 
        className={clases.Less} 
        onClick ={props.borrar}
        disabled = {props.disable}> Quitar </button>
        <button
         className={clases.More} 
         onClick ={props.agregar} > Agregar </button>

    </div>
  )
}
export default buildControl;