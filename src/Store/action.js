import * as actionType from "../Store/actionType"

export const addIngredient = ()=>{

     return{
         type:actionType.ADD_INGREDIENT
     }  
}

export const removeIngredient = ()=>{
    return {
        type : actionType.REMOVE_INGREDIENT
    }
}