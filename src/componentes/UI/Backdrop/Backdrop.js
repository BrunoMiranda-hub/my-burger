import React from "react";
import clases from "./Backdrop.css"
//por que aca cuando llama al props no usa las {} y en los demas componentes si.
//es por que no lo envuelve ningun div o aux?
const Backdrop = (props)=>{
    return (
     props.show ? <div className = {clases.Backdrop} onClick = {props.backdropCancel}> </div> : null
    )
}
export default Backdrop;