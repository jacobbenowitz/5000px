import { Redirect, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      // redirect user to home page if they are logged in
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth)
);