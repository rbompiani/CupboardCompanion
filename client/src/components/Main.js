import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home/Home.js";
import SignUp from "./Signup/Signup.js";
import SignIn from "./Signin/Signin";

// The Main component renders routes 

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="signup" />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={SignIn} />
      <Route path="/Cupboard" component={Home} />

    </Switch>
  </main>
);

export default Main;
