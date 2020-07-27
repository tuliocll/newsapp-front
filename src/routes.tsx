import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { StateContext } from "./state/provider/applicationProvider";
import Login from "./views/Login";
import Home from "./views/Home";

function Routes() {
  const { state, dispatch } = useContext(StateContext);

  const { signed } = state.user;

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/dashboard">
          <Home />
        </Route>
      </Switch>
      {signed ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
    </Router>
  );
}

export default Routes;
