import React from "react"
import burgerLogo from "../../Images/burger-logo.png"
import clases from "./Logo.css"
const logo = (props)=>{
    return(
        <div className={clases.Logo}>
            <img src={burgerLogo} alt="my Burger"/>
        </div>
    )
}
export default logo;