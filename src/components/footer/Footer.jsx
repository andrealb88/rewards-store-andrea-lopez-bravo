import React from "react";
import { Pagination } from "../pagination/Pagination";
import "./Footer.css";

export const FooterPagination =(props)=>{

    return(
        <footer className="footer flex-row">
            <h3 className="normal-text">{props.list.currentData().length} of {props.totalList} products</h3>
            <Pagination list={props.list}/>
            <div className="right-footer">
            <div className="text-footer font-roboto-footer">Copyright ©</div>
      <div className="container-icono-footer">
        <a href="https://www.instagram.com/">
          <img
            className="icono-footer"
            src="./images/instagram.svg"
            height="15"
            alt="icono-footer"
          />
        </a>
        <a href="https://twitter.com">
          <img
            className="icono-footer"
            src="./images/twitter.svg"
            height="15"
            alt="icono-footer"
          />
        </a>
        <a href="https://facebook.com">
          <img
            className="icono-footer"
            src="./images/facebook.svg"
            height="15"
            alt="icono-footer"
          />
        </a>
        <a href="https://telegram.org/">
          <img
            className="icono-footer"
            src="./images/telegram.svg"
            height="15"
            alt="icono-footer"
          />
        </a>
      </div>
      </div>
        </footer>
    )
}