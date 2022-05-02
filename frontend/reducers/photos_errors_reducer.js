import { CLOSE_MODAL } from "../actions/modal/modal_actions";
import { RECEIVE_PHOTO_ERRORS } from "../actions/photos/photos_actions";

const photosErrorsReducer = (initialState = [], action) => {
  Object.freeze(initialState);

  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      debugger
      return action.messages;
    case CLOSE_MODAL:
      return [];
    default:
      return initialState;
  }
}

export default photosErrorsReducer;