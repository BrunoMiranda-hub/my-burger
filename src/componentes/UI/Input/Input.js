import React from "react"
import clases from "./Input.css"


const input = (props) => {

    let inputElement = null
    switch(props.inputtype){
        case "input":
            inputElement = <input className ={clases.inputElement} {...props}/>;
            break;
        case "textarea":
            inputElement = <textarea className ={clases.inputElement} {...props}/>
            break;
        default :
        inputElement = <input className ={clases.inputElement} {...props}/>
    }

    return (
        <div className ={clases.input}>
            <label className={clases.label}>{props.label}</label>
            {inputElement}
        </div>)
}



export default input