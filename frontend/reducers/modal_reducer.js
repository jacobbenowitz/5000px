import {
  OPEN_MODAL,
  CLOSE_MODAL
} from "../actions/modal/modal_actions";

const modalReducer = (state = [], action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalReducer;