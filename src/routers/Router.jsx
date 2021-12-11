import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { Points } from "../pages/Points";
import { NotFound } from "../components/notification/NotFound";
import React from "react";

export const Router  = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History/>}/>
      <Route path="points" element={<Points/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};
