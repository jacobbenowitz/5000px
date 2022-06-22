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
    const modalContainer = document.getElementById('modal-container');
    setTimeout(() => {
      modalContainer.className = 'modal-out';
    }, 5000)
    setTimeout(() => {
      this.props.closeModal()
    }, 5500)

  }

  
  render() {
    const { modal, closeModal, errors } = this.props;
    if (!modal) {
      return null;
    } else if (Object.values(errors).some(error => error[0] === 'success')) {
      this.hideModal();
      return (
        <div id="modal-container" className="modal-in" onClick={closeModal}>
          <div id="modal-content" onClick={e => e.stopPropagation}>
            {this.renderErrors()}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
