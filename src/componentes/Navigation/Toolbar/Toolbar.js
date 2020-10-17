import React from "react"
import clases from "./Toolbar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const toolbar = (props)=>{
    
    return(
        <header className={clases.Toolbar}>
            <DrawerToggle 
            open ={props.open} 
            />
            
            <Logo />
            
            <nav className={clases.DesktopOnly}>
                <NavigationItems/>
            </nav>
            
        </header>
    )
}

export default toolbar;