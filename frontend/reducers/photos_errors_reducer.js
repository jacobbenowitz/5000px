import { CLOSE_MODAL } from "../actions/modal/modal_actions";
import {
  RECEIVE_PHOTO_ERRORS,
  RECEIVE_PHOTO_UPDATE
} from "../actions/photos/photos_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session/session_actions";

const photosErrorsReducer = (initialState = [], action) => {
  Object.freeze(initialState);

  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.messages;
    case RECEIVE_PHOTO_UPDATE:
      return action.messages;
    case LOGOUT_CURRENT_USER:
      return []
    case CLOSE_MODAL:
      return [];
    default:
      return initialState;
  }
}

export default photosErrorsReducer;