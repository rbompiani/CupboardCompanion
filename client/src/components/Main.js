import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home/Home";

// The Main component renders routes 

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="home" />
      <Route exact path="/home" component={Home} />
    </Switch>
  </main>
);

export default Main;
