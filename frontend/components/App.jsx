import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import NavHeaderContainer from './header/nav_header_container';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from "./session/signup_form_container";
import LandingPageContainer from "./landing/landing_page_container";

const App = () => (
  <div>
    <header>
      <h1>5000px</h1>
      <NavHeaderContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <Route path="/" component={LandingPageContainer}/> */}

    </Switch>
  </div>
);

export default App;