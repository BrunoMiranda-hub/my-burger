import React from "react";
import clases from "./burger.css";
import IngredientesBurger from "./Ingredientesburger/Ingredientesburger";

const burger = (props)=>{
    //en el object.keys se trae solo las claves ej: salad ,cheese
    //en el primer map se trae cada uno de los ingredientes
    //despues ese map devuelve un array vacio con los lugares que contiene ese ingrediente 
    let transformedIngredients = Object.keys(props.ingredients).map((ingKey)=>{
                                    return[...Array(props.ingredients[ingKey])].map((_,i)=>{

                                            return <IngredientesBurger key ={ingKey + i} type = {ingKey} /> ;   
                                                
                                        })
                                    }).reduce((arr,el) => {
                                        return arr.concat(el)
                                    },[])
        if(transformedIngredients.length === 0){
            transformedIngredients = (<p> Por favor comience a agregar Ingredientes </p>)
        }


    return(
        <div className ={clases.burger} >
            <IngredientesBurger type = "BreadTop"/>
            {transformedIngredients}
            <IngredientesBurger type = "BreadBottom"/>


        </div>
    )
    
}

export default burger;