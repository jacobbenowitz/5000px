import * as UserApiUtil from '../../util/user_api_util';

// action type consts
export const RECEIVE_USER = 'RECEIVE_USER';

// regular action creators
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

// thunk action creators

export const fetchUser = userId => dispatch => {
  UserApiUtil.fetchUser(userId).then(user => {
    dispatch(receiveUser(user))
  })
};