import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import clases from "./SideDrawer.css"
import Backdrop from "../../UI/Backdrop/Backdrop"
const sideDrawer = (props)=>{

    
    let clasesAdjuntas = [clases.SideDrawer,clases.Close];
    if(props.open){
        clasesAdjuntas = [clases.SideDrawer,clases.Open];
    }
    return(
    <div>
            <Backdrop show = {props.open} backdropCancel={props.cancel}/>
        <div className={clasesAdjuntas.join(" ")}>
            <div className={clases.Logo}>
                    <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    </div>
    )    
}
export default sideDrawer