import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import NavHeaderContainer from './navigation/nav_header_container';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from "./session/signup_form_container";
import NewProfileFormContainer from "./profile/new_profile_form_container";
import EditProfileFormContainer from "./profile/edit_profile_form_container";
import {LandingPage} from "./landing/landing_page";
import NavFooter from "./navigation/nav_footer";
import PhotosIndexContainer from "./photos/photos_index_container";

const App = () => (
  <div className="grid-12-col">
    <header>
      <NavHeaderContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/profile/new" component={NewProfileFormContainer} />
      <Route path="/profile/edit" component={EditProfileFormContainer} />
      <Route path="/profile/edit/:profileId" component={EditProfileFormContainer} />
      <Route path="/photos/index" component={PhotosIndexContainer} />
      <Route path="/" component={LandingPage} />
    </Switch>
    <footer>
      <NavFooter />
    </footer>
  </div>
);

export default App;