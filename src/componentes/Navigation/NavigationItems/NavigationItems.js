import React from "react"
import clases from "./NavigationItems.css"
import NavigationItem from "../../Navigation/NavigationItems/NavigationItem/NavigationItem"
const navigationItems = ()=>{
    return (
        <ul className = {clases.NavigationItems}>
           <NavigationItem link="./">Burger Builder</NavigationItem>
           <NavigationItem link="./">Check Out</NavigationItem>
        </ul>
    )
}
export default navigationItems