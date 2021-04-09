import { connect } from "react-redux"
import { addIngredient, removeIngredient } from "../Store/action"
import BurgerBuilder from "../contenedores/BurgerBuilder/BurgerBuilder"
//Le pase el State al componente burger, donde tenes toda la logica.
const mapStateToProps = (state) => {
    console.log(state)
//pregunta
//esta funcion mapStateToProps es la que rapeas al componente y le pasa el estado que yo cree en el reducer
//mi pregunta es como hace para recibir en el state el estado del reduce?
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
//la funcion connect recibe dos propiedades mapState y mapDisp que reciben un paramatro por defecto.
//no me quedo claro lo de mapStateToProps como hace para recibit ese state(Preguntar al pablo)