import React from "react";
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavHeaderContainer from './navigation/nav_header_container';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from "./session/signup_form_container";
import NewProfileFormContainer from "./profile/new_profile_form_container";
import EditProfileFormContainer from "./profile/edit_profile_form_container";
import LandingPage from "./landing/landing_page";
import NavFooter from "./navigation/nav_footer";
import PhotosIndexContainer from "./photos/photos_index_container";
import PhotoUploadFormContainer from "./photos/photo_upload_form_container";
import SinglePhotoShowContainer from "./photos/single_photo_show_container";
import ProfileShowContainer from "./profile/show_page/profile_show_container";
import HomeFeedContainer from "./photo_feed/home_feed_container";
import ModalContainer from "./modal/modal_container";
import PhotoEditFormContainer from "./photos/photo_edit_form_container";
import DiscoverFeedContainer from "./photo_feed/discover_feed_container";
import PhotoCollectionContainer from "./photo_feed/photo_collection_container";
import { Route } from "react-router-dom";
import LikedPhotosFeedContainer from "./photo_feed/liked_photos_feed_container";
import NotFound from "./404/not_found";

const App = () => (
  <div className="grid-pancake-stack">
    <ModalContainer />

    <header className="header-top-stack">
      <NavHeaderContainer />
    </header>

    <Switch>
      <AuthRoute exact path={"/login"}
        component={LoginFormContainer}
      />
      <Route exact path={"/signup"}
        component={SignupFormContainer}
      />
      {/* <ProtectedRoute exact path={"/profile/new"}
        component={NewProfileFormContainer}
      /> */}
      <ProtectedRoute exact path={"/profiles/settings"}
        component={EditProfileFormContainer}
      />
      <ProtectedRoute exact path={"/profiles/:profileId"}
        component={ProfileShowContainer} 
      />
      <ProtectedRoute exact path={"/photos/upload"}
        component={PhotoUploadFormContainer} 
      /> 
      <ProtectedRoute exact path={"/photos/:photoId"}
        component={SinglePhotoShowContainer} 
      />
      <ProtectedRoute exact path={"/photos/:photoId/edit"}
        component={PhotoEditFormContainer} 
      />
      <ProtectedRoute exact path={"/home"} 
        component={HomeFeedContainer} 
      />
      <Route exact path={"/discover/:page"}
        component={DiscoverFeedContainer}
      />
      <ProtectedRoute exact path={"/galleries/likes"}
        component={LikedPhotosFeedContainer}
      />
      <ProtectedRoute exact path={"/galleries/:category"}
        component={PhotoCollectionContainer}
      />
      <AuthRoute exact path={"/"} 
        component={LandingPage} 
      />
      <Route exact path={"/not-found"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>

    <footer className="grid-bottom-stack">
      <NavFooter />
    </footer>
  </div>
);

export default App;