import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { Points } from "../pages/Points";
import { NotFound } from "../components/notification/NotFound";
import React from "react";

export const Router  = () => {
  return (
    <Switch>
      <Route exact path="/rewards-store-andrea-lopez-bravo">
        <Home />
      </Route>
      <Route path="/rewards-store-andrea-lopez-bravo/history">
        <History />
      </Route>
      <Route path="/rewards-store-andrea-lopez-bravo/points">
        <Points/>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
