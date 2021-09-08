import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SessionForm from "../components/sessoin_form/session_form";
import HeaderNav from "./navs/header_nav";

const App = () => {
  return (
    <div>
      <HeaderNav />
      <Switch>
        <AuthRoute exact path="/login" component={SessionForm} />
        <AuthRoute exact path="/signup" component={SessionForm} />
      </Switch>
    </div>
  );
};

export default App;
