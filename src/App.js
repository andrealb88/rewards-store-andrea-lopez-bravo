import React, { useEffect, useContext } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav.jsx";
// import { AppConotext } from "./context/AppConotext";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
    </div>
  );
}

export default App;
