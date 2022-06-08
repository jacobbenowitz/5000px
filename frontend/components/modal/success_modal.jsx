import React from "react";

export default class SuccessModal extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    
    const { photos, profiles, session } = this.props.errors;

    if (photos || profiles || session) {
      return (
        <div className="modal success" key={'successModal'}>
          <div className="modal-icon">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div>
            {photos.map(error => {
              return (
                <span>{error}</span>
              )})
            }
          </div>
        </div>
      )
    }
  }
}