import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HeaderNav from "./navs/header_nav";
import Modal from "./modal/modal";
import Splash from "./splash/splash";

const App = () => {
  return (
    <div>
      <Modal />
      <HeaderNav />
      <Splash />
      <Switch>
        {/* <ProtectedRoute exact path='/zips/new' component={}/> */}
      </Switch>
    </div>
  );
};

export default App;
