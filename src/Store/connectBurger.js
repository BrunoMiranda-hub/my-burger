import { connect } from "react-redux"
import { addIngredient, removeIngredient } from "../Store/action"
import BurgerBuilder from "../contenedores/BurgerBuilder/BurgerBuilder"
//Le pase el State al componente burger, donde tenes toda la logica.
const mapStateToProps = (state) => {
    console.log("pito chico",state)

    return {
        ings : state.ings
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ing) => dispatch(addIngredient(ing)),
        onIngredientRemoved:(ing) => dispatch(removeIngredient(ing))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)
