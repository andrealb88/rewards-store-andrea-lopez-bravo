import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";

export const Menu =()=>{
    return(
        <ul className="menu flex-row">
             <li className="pink-line"><Link className="normal-text" to="/rewards-store-andrea-lopez-bravo/">Home</Link></li>
             <li className="pink-line"><Link className="normal-text" to="/rewards-store-andrea-lopez-bravo/points">Add points</Link></li>
             <li className="pink-line"><Link className="normal-text" to="/rewards-store-andrea-lopez-bravo/history">History</Link></li>
         </ul>
    )
 }