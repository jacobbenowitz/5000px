import React from "react";
import SuccessModal from "../modal/success_modal";
import PhotoEditUploadLoader from "./content-loaders/photo-edit-upload-loader";

export default class PhotoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: this.props.photoId,
      title: this.props.title || "",
      description: this.props.description || "",
      location: this.props.description || "",
      camera: this.props.camera || "",
      lens: this.props.lens || "",
      photoUrl: this.props.photoUrl
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  componentDidMount() {
    const { photo, photoId, fetchPhoto } = this.props;
    debugger
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
      debugger
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
    const overlay = document.querySelector('.img-preview-overlay');
    overlay.classList.remove('img-overlay-hidden');
    overlay.classList.add('img-overlay-show');
  }
  
  hideOverlay() {
    const overlay = document.querySelector('.img-preview-overlay');
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
    
    const overlay = <div className="img-preview-overlay img-overlay-hidden">
      <i onClick={this.deletePhoto}
        className="fa-solid fa-trash fa-xl delete-icon"></i> </div>
    
    return (
          <div className="image-edit">

            <div className="image-preview-container">
              <div className="image-preview"
                onMouseOver={this.showOverlay}
                onMouseLeave={this.hideOverlay}
              >
                { overlay }
            {this.props.photoUrl ? (
              <img className='image-preview-img'
                src={this.props.photoUrl} />) : (
              <PhotoEditUploadLoader />)}
              </div>
            </div>

            <div className="edit-form-container">
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