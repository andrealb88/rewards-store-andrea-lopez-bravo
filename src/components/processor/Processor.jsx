import "./Processor.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { morePoints } from "../../services/points";
import { getProducts } from "../../services/products"

export const Selector =(props)=>{
    const { points, handlerAddPoint, setProducts} = useContext(AppContext);
    const HandlePoint =(value)=>{
        morePoints(value)
            .then ((data) => {
                handlerAddPoint(value)
                alert(data.message)
            })
            //useEffect(()=>{
            getProducts()
            .then ((prod) => {
              setProducts(prod)
              })
        //}, [])
            }
    return(
        <div className="container-selector flex-row center">
            <button value={points} onClick={()=>HandlePoint(props.value)} className="selector normal-text">{props.description}</button>  
        </div>
        
    )
   
}
