import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../pages/index/Index";
import SignUp from "../pages/Signup";
import SignIn from "../pages/Signin";
import Create from "../pages/Create";

const Routes = ({onChangeIsAuth}) => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/signin" exact render={() => <SignIn onChangeIsAuth={onChangeIsAuth}/>} />
    <Route path="/create" exact component={Create} />
  </Switch>
);

export default Routes;
