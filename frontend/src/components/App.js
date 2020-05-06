import React from "react";
import {Route, Switch} from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Header from "./common/Header";
import ProfilePage from "./core/ProfilePage";
import PrivateRoute from "./authentication/PrivateRoute";
import LoginPage from "./authentication/LoginPage";
import SignUpPage from "./authentication/SignUpPage";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <PrivateRoute exact path="/" component={ProfilePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/sign-up" component={SignUpPage}/>
        <Route component={PageNotFound}/>
      </Switch>
    </>
  );
}

export default App;