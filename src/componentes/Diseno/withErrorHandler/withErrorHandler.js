import React from "react"
import Modal from "../../UI/Modal/Modal"

const withErrorHandler = (ComponenteEntrada)=>{
    return(props)=>{
        return(
        <div>
        <Modal show>
        Algo salio mal!!     
        </Modal>   
        <ComponenteEntrada {...props} />
        </div>
        )
    }

}
export default withErrorHandler;