import React from "react"
import clases from "./NavigationItem.css"
const navigationItem = (props) =>{
    return (
        <li className={clases.NavigationItem}>
            <a 
            href ={props.link}
            className={props.active ? clases.active : null}> 
            {props.children}  
            </a>
            </li>
    )
}
export default navigationItem;
