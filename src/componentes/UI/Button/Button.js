import React from "react";
import clases from "./Button.css"

const button = (props)=>{
    return(
        <button 
            className = {[clases.Button,clases[props.btn]].join(" ")}
            onClick ={props.clicked}>
            {props.children}
        </button>
    )
}
export default button