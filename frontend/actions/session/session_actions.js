import * as SessionApiUtil from '../../util/session_api_util'
import { receiveProfile, receiveCurrentProfile } from '../profile/profile_actions'
// action type constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; // user
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'; // ()
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'; // [errors]

// regular action creators
export const receiveCurrentUser = currentUser => {
  debugger
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
    // currently currentUser is nested
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const receiveErrors = errors => {
  debugger
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}
// thunk action creators
export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then(({ user, profile }) => {
      debugger
      dispatch(receiveCurrentUser(user))
      dispatch(receiveProfile(profile))
      dispatch(receiveCurrentProfile(profile))
    }, error => {
      dispatch(receiveErrors(error.responseJSON))
    })
}

export const signup = user => dispatch => {
  debugger
  return SessionApiUtil.createUser(user)
    .then(user => {
      debugger
      dispatch(receiveCurrentUser(user))
    }, error => {
      dispatch(receiveErrors(error.responseJSON))
    })
}

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(() => {
    dispatch(logoutCurrentUser())
  })
}

export const fetchCurrentUser = userId => dispatch => {
  return SessionApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
}