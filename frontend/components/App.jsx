import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavHeaderContainer from './navigation/nav_header_container';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from "./session/signup_form_container";
import NewProfileFormContainer from "./profile/new_profile_form_container";
import EditProfileFormContainer from "./profile/edit_profile_form_container";
import LandingPage from "./landing/landing_page";
import NavFooter from "./navigation/nav_footer";
import PhotosIndexContainer from "./photos/photos_index_container";
import PhotoFormContainer from "./photos/photo_form_container";
import SinglePhotoShowContainer from "./photos/single_photo_show_container";
import ProfileShowContainer from "./profile/show_page/profile_show_container";
import HomeFeedContainer from "./photo_feed/home_feed_container";

const App = () => (
  <div className="grid-pancake-stack">
    <header className="header-top-stack">
      <NavHeaderContainer />
    </header>
    <Switch>
      <AuthRoute path={"/login"} component={LoginFormContainer} />
      <AuthRoute path={"/signup"} component={SignupFormContainer} />
      <AuthRoute path={"/profile/new"} component={NewProfileFormContainer} />
      <ProtectedRoute path={"/profile/edit"} component={EditProfileFormContainer} />
      <Route path={"/profiles/:profileId"} component={ProfileShowContainer} />
      <ProtectedRoute path={"/photos/upload"} component={PhotoFormContainer} /> 
      <ProtectedRoute path={"/photos/:photoId"} component={SinglePhotoShowContainer} />
      <ProtectedRoute path={"/discover"} component={HomeFeedContainer} />
      <ProtectedRoute path={"/"} component={HomeFeedContainer} />
      <AuthRoute path={"/"} component={LandingPage} />
    </Switch>
    <footer className="grid-bottom-stack">
      <NavFooter />
    </footer>
  </div>
);

export default App;