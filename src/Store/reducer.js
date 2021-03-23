import * as actionType from "../Store/actionType"

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
                    ...state.ingredients
                }
            }
            break;
        case actionType.REMOVE_INGREDIENT:
            state ={
                ...state,
                ingredients:{
                    
                }
            }
            
        break

        default:
            state = { ...state }
            break;

    }
    return state
}
export default burgerReducer



