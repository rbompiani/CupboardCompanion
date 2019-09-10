import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth/login" component={Login} />
        </Switch>
      </Router>
      
    );
  }


export default App;