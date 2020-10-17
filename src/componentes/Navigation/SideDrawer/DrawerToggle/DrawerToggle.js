import React from "react"
import clases from "./DrawerToggle.css"
const drawerToggle = (props)=>{
    return(
        <div className={clases.DrawerToggle} onClick ={props.open}>

          <div></div>
          <div></div>
          <div></div>

        </div>
    )

}
export default drawerToggle;