import React from "react"
import clases from "./Spinner.css"
const spinner = ()=>{
    return (
        <div>
            <div className = {clases.Loader}>Loading...</div>
        </div>
    )

}
export default spinner;