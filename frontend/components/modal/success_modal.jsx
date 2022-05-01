import React from "react";

export default class SuccessModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const { photos, profiles, session } = this.props.errors;
    
    debugger
    if (photos || profiles || session) {
      return (
        <div id="success modal">
          <div className="modal-icon">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div>
            {photos.map(error => {
              debugger
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