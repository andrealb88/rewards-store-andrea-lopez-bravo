import "./Result.css";
import React, { useContext} from "react";
import { AppContext } from "../../context/AppContext";
import { ProductCard } from "../product/ProductCard";

export const Result =()=>{
  const { paginationList } = useContext(AppContext);

    return(
        <main className="result flex-row">
            {
                paginationList.currentData().length > 0 ?
                paginationList.currentData().map((product) => 
               <ProductCard 
                    key={product._id}
                    id={product._id}
                    url={product.img.hdUrl}
                    name={product.name}
                    category={product.category}
                    points={product.cost}
                />) : null   
               
            }
            
        </main>       
    )
}  
