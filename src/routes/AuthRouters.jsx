import React from "react";

import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import LoginScream from "../pages/LoginScream"
import RegisterScream from "../pages/RegisterScream";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginScream} />
      <Route exact path="/auth/register" component={RegisterScream} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRouter;
