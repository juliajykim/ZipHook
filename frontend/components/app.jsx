import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import HeaderNav from "./navs/header_nav";
import Modal from "./modal/modal";
import Splash from "./splash/splash";
import Search from "./Search/search";
import HouseShow from "./Houses/house_show";
import HouseSell from "./Houses/house_sell";
import SavedHouses from "./CurrentUserNav/saved_houses";
import HouseSellForm from "./Houses/house_sell_form";

const App = () => {
  return (
    <div>
      <Modal />
      <HeaderNav />
      <Switch>
        <ProtectedRoute exact path="/zips/new" component={HouseSellForm} />
        <ProtectedRoute exact path="/zips/saves" component={SavedHouses} />
        <Route path="/zips/:id" component={HouseShow} />
        <ProtectedRoute path="/sell" component={HouseSell} />
        <Route path="/zips" component={Search} />
        <Route exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
