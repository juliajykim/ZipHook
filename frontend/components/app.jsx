import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HeaderNav from "./Navs/header_nav";
import Modal from "./Modal/modal";
import Splash from "./Splash/splash";
import Search from "./Search/search";

const App = () => {
  return (
    <div>
      <Modal />
      <HeaderNav />
      <Switch>
        {/* <ProtectedRoute exact path='/zips/new' component={}/> */}
        <Route path="/zips" component={Search} />
        <Route exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
