import React from "react"
import clases from "./NavigationItem.css"
import { NavLink } from "react-router-dom";
const navigationItem = (props) =>{
    return (
        <li className={clases.NavigationItem}>
            <NavLink 
             to = {props.link}
             activeClassName = {clases.active}
             exact>
                 {props.children}
                 </NavLink> 
            </li>
    )
}
export default navigationItem;
