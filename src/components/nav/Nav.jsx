import React from "react";
import "./Nav.css"

export const Nav =(props) =>{
    return(
        <nav className="nav flex-row">
        <div className="container-logo">
        <img src="./images/aerolab-logo.svg" alt="logo" />
            </div>
            <div className="user-points flex-row-center">
                <h3 className="username">John Kite</h3>
                {/* Put here user request api */}
            </div>
            </nav>
    )
}