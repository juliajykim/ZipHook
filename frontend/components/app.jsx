import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SessionForm from "./session_form/session_form";
import HeaderNav from "./navs/header_nav";
import Modal from "./modal/modal";

const App = () => {
  return (
    <div>
      <Modal />
      <HeaderNav />
      <Switch>
        {/* <ProtectedRoute exact path='/zips/new' component={}/> */}
        <AuthRoute exact path="/login" component={SessionForm} />
        <AuthRoute exact path="/signup" component={SessionForm} />
      </Switch>
    </div>
  );
};

export default App;
