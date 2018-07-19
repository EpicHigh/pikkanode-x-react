import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../pages/index/Index";
import Signup from "../pages/Signup"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
	    <Route path="/signup" exact component={Signup} />
    </Switch>
  );
};

export default Routes
