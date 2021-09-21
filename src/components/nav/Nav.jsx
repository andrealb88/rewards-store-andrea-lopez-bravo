import React,{useContext} from "react";
import "./Nav.css"
import { AppContext } from "../../context/AppContext";

export const Nav =() =>{
    const { user } = useContext(AppContext);
    return(
        <nav className="nav flex-row">
        <div className="container-logo">
        <img src="./images/aerolab-logo.svg" alt="logo" />
            </div>
            <div className="user-points flex-row-center">
                <h3 className="username">{user.name}</h3>
                {/* Put here user request api */}
            </div>
            </nav>
    )
}