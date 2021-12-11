import "./Title.css";
import React from "react"

export const Title =(props)=>{
    return(
        <div className="container-title center">
            <h3 className="title">{props.title}</h3>  
        </div>
    )
}