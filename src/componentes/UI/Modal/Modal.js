import React from "react";
import clases from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop"

const modal = (props) =>{
        return (
            
            <div>
                <Backdrop show = {props.show} backdropCancel = {props.modalClosed} />
            <div 
            //preguntar como hacer estilos dinamicos desde las clases y no con estilos
            className = {props.show ? [clases.Modal,clases.True].join(" ") : [clases.modal, clases.False].join(" ")}
            >
                
                {props.children}
            </div>
            </div>
        )
}

export default modal;