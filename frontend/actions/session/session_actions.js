import * as SessionApiUtil from '../../util/session_api_util'
import { fetchPhotos } from '../photos/photos_actions';
import { receiveProfile, fetchCurrentProfile, receiveCurrentProfile, fetchProfiles } from '../profile/profile_actions'


// action type constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; // user
export const RECEIVE_USER = 'RECEIVE_USER'; // user
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'; // ()
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'; // [errors]


// regular action creators
export const receiveCurrentUser = currentUser => {
  // debugger
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
    // currently currentUser is nested
  }
}

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const receiveSessionErrors = errors => {
  // debugger
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}
// thunk action creators
export const fetchUser = userId => dispatch => {
  return SessionApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
}

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then(({ user }) => {
      dispatch(receiveCurrentUser(user))
      dispatch(fetchCurrentProfile(user.profileId))
      debugger
      dispatch(fetchPhotos())
      dispatch(fetchProfiles())
    }, error => {
      dispatch(receiveSessionErrors(error.responseJSON))
    })
}

export const signup = user => dispatch => {
  return SessionApiUtil.createUser(user)
    .then(user => {
      dispatch(receiveCurrentUser(user))
      dispatch(fetchPhotos())
      dispatch(fetchProfiles())
    }, error => {
      debugger
      dispatch(receiveSessionErrors(error.responseJSON))
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