import { defaultGetLocalIdent } from "css-loader";
import React from "react";
import SuccessModal from "./success_modal";
import reactDom from "react-dom";
import delay from "../../util/delay_util";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderErrors() {
    const { modal, errors } = this.props;
    switch (modal) {
      case 'error':
        // return <ErrorModal errors={ errors } />;
        break;
      case 'success':
        return <SuccessModal errors={errors} />;
      default:
        return null;
    }
  }

  hideModal = () => {
    setTimeout(() => {
      const modalContainer = document.getElementById('modal-container');
      modalContainer.className = 'modal-out';
      debugger
    }, 5000)
    setTimeout(() => {
      this.props.closeModal()
    }, 5500)

  }

  
  render() {
    debugger
    const { modal, closeModal, errors } = this.props;
    if (!modal) {
      return null;
    } else {
      this.hideModal();
      return (
        <div id="modal-container" className="modal-in" onClick={closeModal}>
          <div id="modal-content" onClick={e => e.stopPropagation}>
            {/* <p>{Object.values(errors)}</p> */}
            {this.renderErrors()}
          </div>
        </div>
      )
    }
  }
}
