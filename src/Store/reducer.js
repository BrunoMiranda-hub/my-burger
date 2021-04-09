import * as actionType from "../Store/actionType"
import { combineReducers } from 'redux'

const initialState = {

    ingredients: {
        Bacon: 0,
        Cheese: 0,
        Meat: 0,
        Salad: 0
    },
    price: 200,

}

const burgerReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.ADD_INGREDIENT:

            state = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            }
            break;
        case actionType.REMOVE_INGREDIENT:
            state ={
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            }
            
        break

        default:
            state = { ...state }
            break;

    }
    return state
}
export default combineReducers({
    ings:burgerReducer
  })
  //El reducer es el que se encarga 



