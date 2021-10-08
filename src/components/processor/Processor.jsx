import "./Processor.css";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { addPoints } from "../../services/points";
import { getProducts } from "../../services/products"

export const Selector =(props)=>{
    const { points, handlerAddPoint, setProducts} = useContext(AppContext);
    const handlePoint =(value)=>{
        console.log(handlePoint)
        addPoints(value)
            .then ((data) => {
                handlerAddPoint(value)
                alert(data.message)
            })
            useEffect(()=>{
            getProducts()
            console.log(getProducts())
            .then ((prod) => {
              setProducts(prod)
              })
        }, [setProducts])
    return(
        <div className="container-selector flex-row center">
            <button value={points} onClick={()=>handlePoint(props.value)} className="selector normal-text">{props.description}</button>  
        </div>
        
    )
   
}
}