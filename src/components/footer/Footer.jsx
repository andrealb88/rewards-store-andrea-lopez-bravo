import React from "react";
import { Pagination } from "../pagination/Pagination";

export const FooterPagination =(props)=>{

    return(
        <footer className="footer flex-row">
            <h3 className="normal-text">{props.list.currentData().length} of {props.totalList} products</h3>
            <Pagination list={props.list}/>
            <div className="text-footer font-roboto-footer">Copyright ©</div>
      <div className="container-icono-footer">
        <a href="https://www.instagram.com/">
          <img
            className="icono-footer"
            src="./assets/svg/instagram.svg"
            height="15"
            alt="icono-footer"
          />
        </a>
        <a href="https://twitter.com">
          <img
            className="icono-footer"
            src="./assets/svg/twitter.svg"
            height="15"
            alt="icono-footer"
          />
        </a>
        <a href="https://facebook.com">
          <img
            className="icono-footer"
            src="./assets/svg/facebook.svg"
            height="15"
            alt="icono-footer"
          />
        </a>
        <a href="https://telegram.org/">
          <img
            className="icono-footer"
            src="./assets/svg/telegram.svg"
            height="15"
            alt="icono-footer"
          />
        </a>
      </div>
        </footer>
    )
}