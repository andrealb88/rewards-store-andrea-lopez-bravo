import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Filter } from "../components/filter/Filter";
import { Result } from "../components/result/Result";
import { FooterPagination } from "../components/footer/Footer";
import { getProducts } from "../services/products";

export const Home = () => {
  const { totalProducts, paginationList, setProducts } = useContext(AppContext);
  useEffect(() => {
    getProducts().then((prod) => {
      setProducts(prod);
      console.log();
      console.log("Home side effect");
    });
  }, [setProducts]);
  console.log();
  console.log("render Home");

  return (
    <section className="section">
      <Filter />
      <Result />
      <FooterPagination list={paginationList} totalList={totalProducts} />
    </section>
  );
};
