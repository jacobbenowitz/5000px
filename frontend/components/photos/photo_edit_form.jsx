import React from "react";
import SuccessModal from "../modal/success_modal";

export default class PhotoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: "",
      title: "",
      description: "",
      location: "",
      camera: "",
      lens: "",
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  componentDidMount() {
    const { photo, photoId, fetchPhoto } = this.props;
    
    if (Object.keys(photo) > 1) {
      this.setState({
        photoId: photoId,
        title: photo.title,
        description: photo.description,
        location: photo.location,
        camera: photo.camera,
        lens: photo.lens,
        photoUrl: photo.photoUrl
      })
    } else {
      fetchPhoto(photoId)
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePhoto(this.state).then(() => {
      this.props.openModal("success");
      this.props.history.push(`/profiles/${this.props.profileId}`)
    })
  }

  handleInput = (type) => {
    return e => {
      this.setState(
        { [type]: e.target.value })
      }
  }
    

  showOverlay() {
    const overlay = document.querySelector('#img-preview-overlay');
    overlay.classList.remove('img-overlay-hidden');
    overlay.classList.add('img-overlay-show');
  }
  
  hideOverlay() {
    const overlay = document.querySelector('#img-preview-overlay');
    overlay.classList.remove('img-overlay-show');
    overlay.classList.add('img-overlay-hidden');
  }

  deletePhoto() {
    const { deletePhoto, photoId } = this.props;
    // make a confirmation modal
    deletePhoto(photoId)
  };



  render() {
    // add image loading animation
    const preview = this.state.photoUrl ?
      <img src={this.state.photoUrl}
      /> : null;
    
    const overlay = <div id="img-preview-overlay"
      className="img-overlay-hidden">
      <i id="delete-icon" onClick={this.deletePhoto}
        className="fa-solid fa-trash fa-xl"></i> </div>
    
    return (
          <div id="image-upload-step-2" className="visable">

            <div id="image-preview-container">
              <div className="image-preview"
                onMouseOver={this.showOverlay}
                onMouseLeave={this.hideOverlay}
              >
                { overlay }
                { preview }
                <span className="photo-label-upload">{ this.state.photoFile ? this.state.photoFile.name : "" }</span>
              </div>
            </div>

            <div id="upload-form-container">
              <form className="photo-upload-form" onSubmit={this.handleSubmit}>

                <div className="form-input">
                  <label htmlFor="photo-title">Title</label>
                  <input type="text" name="photo-title"
                    value={ this.state.title }
                    className="text-input" onChange={this.handleInput('title')}
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="photo-description">Description</label>
                  <textarea name="photo-description"
                    className="description-input" onChange={this.handleInput('description')} />
                </div>

                <div className="form-input">
                  <label htmlFor="photo-lens">Lens</label>
                  <input type="text" name="photo-lens"
                    value={ this.state.lens }
                    className="text-input" onChange={this.handleInput('lens')}
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="photo-camera">Camera</label>
                  <input type="text" name="photo-camera"
                    value={ this.state.camera }
                    className="text-input" onChange={this.handleInput('camera')}
                  />
                </div>
                <div className="form-bot-buttons">

                  <span onClick={this.deletePhoto}
                    className="cancel-upload"
                  >Cancel</span>
                  <button className="upload-photo-button"
                    type="submit">Upload photo</button>
                </div>
                
              </form>
            </div>
          </div>
    )
  }

}