import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../pages/index/Index";
import SignUp from "../pages/Signup";
import SignIn from "../pages/Signin";
import Create from "../pages/Create";
import Error from "../pages/404"

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/signin" exact component={SignIn}/>
    <Route path="/create" exact component={Create} />
	  <Route path='/404' component={Error} />
	    <Redirect from='*' to='/404' />
  </Switch>
);

export default Routes;
