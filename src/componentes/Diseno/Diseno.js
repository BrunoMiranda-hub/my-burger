import React, {Component} from "react";

import clases from "./Diseno.css";
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Diseno extends Component {
    state = {
        clicked : false,
    }
    onclickTrue = ()=>{
        this.setState({
            clicked : true
        })
    }

    onclickFalse = ()=>{
        this.setState({
            clicked : false
        })
    }

    render(){
        return(
            <div>
        
        <Toolbar 
        open= {this.onclickTrue}
        />
        <SideDrawer
        open = {this.state.clicked} 
        cancel = {this.onclickFalse}
        />

        <main className = {clases.main}>
            {this.props.children}
            
        </main>
        </div>
        )
    }
}
    export default Diseno;

