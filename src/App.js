import React, { useEffect, useContext } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav.jsx";
import { getUser } from "./services/users";
import { AppContext } from "./context/AppContext";
import { Notification } from "./components/notification/Notification";
import { Router } from "./routers/Router";

function App() {
  const { setUser } = useContext(AppContext);
  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, [setUser]);
  return (
    <div className="App">
      <Notification />
      <Nav />
      <Header />
      <Router />
    </div>
  );
}

export default App;
