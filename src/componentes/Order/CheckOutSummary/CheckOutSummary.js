import React from "react"
import Burger from "../../Burger/burger"
import clases from "./checkOutSummary.css"
import Button from "../../UI/Button/Button"

const checkoutSummary = (props) => {
    return (
        <div className={clases.checkout}>
            <h1>Esperamos que la hamburguesa le guste</h1>
            <div className="burger">
                <Burger ingredients={props.ingredients} />
            </div>
            <div className="buttons" >
                <Button
                    clicked
                    btn="Danger">CANCEL</Button>
                <Button
                    clicked
                    btn="Success">CONTINUE</Button>
            </div>
        </div>
    )

}
export default checkoutSummary;