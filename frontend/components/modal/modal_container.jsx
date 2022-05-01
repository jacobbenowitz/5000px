import { closeModal, openModal } from "../../actions/modal/modal_actions";
import { connect } from "react-redux";
import Modal from './modal'

const mapStateToProps = state => {
  return {
    modal: state.modal,
    errors: state.errors
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)