import { defaultGetLocalIdent } from "css-loader";
import React from "react";
import SuccessModal from "./success_modal";
import reactDom from "react-dom";

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

  render() {
    debugger
    const { modal, closeModal, errors } = this.props;
    if (!modal) {
      return null;
    } else {
      return (
        <div id="modal-container" onClick={closeModal}>
          <div id="modal-content" onClick={e => e.stopPropagation}>
            {/* <p>{Object.values(errors)}</p> */}
            {this.renderErrors()}
          </div>
        </div>
      )
    }
  }
}
