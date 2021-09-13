import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HeaderNav from "./navs/header_nav";
import Modal from "./modal/modal";
import Splash from "./splash/splash";
import HousesIndex from "./Houses/houses_index";

const App = () => {
  return (
    <div>
      <Modal />
      <HeaderNav />
      <Switch>
        {/* <ProtectedRoute exact path='/zips/new' component={}/> */}
        <Route path="/zips" component={HousesIndex} />
        <Route exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
