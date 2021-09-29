import "./Detail.css"
import React from "react"

export const Details =(props)=>{
    return(
        <div className={`details flex-row ${props.classContainer}`}>
             <h5 className={`normal-text center ${props.classText}`}>{props.text}</h5>
             <img className="center" src="./images/coin.svg" alt="icono" />    
        </div>
    )
}