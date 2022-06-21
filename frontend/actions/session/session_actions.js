import * as SessionApiUtil from '../../util/session_api_util'

// action type constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; // user
export const RECEIVE_USER = 'RECEIVE_USER'; // user
export const RECEIVE_USERS = 'RECEIVE_USERS'; // user
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'; // ()
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'; // [errors]
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'; // [errors]


// regular action creators
export const receiveCurrentUser = currentUser => {
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

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

const resetSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
}

// thunk action creators
export const fetchUser = userId => dispatch => {
  return SessionApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
}

export const fetchUsers = () => dispatch => {
  return SessionApiUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
}

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then((user) => {
      dispatch(receiveCurrentUser(user))
    }, error => {
      dispatch(receiveSessionErrors(error.responseJSON))
    })
}

export const signup = user => dispatch => {
  return SessionApiUtil.createUser(user)
    .then(user => {
      dispatch(receiveCurrentUser(user))
    }, error => {
      dispatch(receiveSessionErrors(error.responseJSON))
    })
}

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
}

export const fetchCurrentUser = userId => dispatch => {
  return SessionApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const clearSessionErrors = () => dispatch => {
  dispatch(resetSessionErrors())
}