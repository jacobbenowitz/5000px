import { RECEIVE_PHOTO_ERRORS } from "../actions/photos/photos_actions";

const photosErrorsReducer = (initialState = [], action) => {
  Object.freeze(initialState);

  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.messages;
    default:
      return initialState;
  }
}

export default photosErrorsReducer;