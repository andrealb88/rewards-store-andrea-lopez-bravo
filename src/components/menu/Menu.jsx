import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";

export const Menu =()=>{
    return(
        <ul className="menu flex-row">
             <li className="pink-line"><Link className="normal-text" to="/store-lopez-andrea/">Home</Link></li>
             <li className="pink-line"><Link className="normal-text" to="/store-lopez-andrea/points">Add points</Link></li>
             <li className="pink-line"><Link className="normal-text" to="/store-lopez-andrea/history">History</Link></li>
         </ul>
    )
 }