import React from "react";
import SuccessModal from "../modal/success_modal";
import PhotoEditFormLoader from "./content-loaders/photo-edit-loader";
import PhotoEditUploadLoader from "./content-loaders/photo-edit-upload-loader";

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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    debugger
  }

  componentDidMount() {
    const { photo, photoId, fetchPhoto } = this.props;
    debugger
    if (Object.keys(photo).length < 1) {
      fetchPhoto(photoId).then(() => {
        debugger
        // this.setState({
        //   photoId: photo.photoId,
        //   title: photo.title,
        //   description: photo.description,
        //   location: photo.location,
        //   camera: photo.camera,
        //   lens: photo.lens,
        // })
      })
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
    debugger
    return (
          <div className="image-edit">

            <div className="image-preview-container">
              <div className="image-preview"
                onMouseOver={this.showOverlay}
                onMouseLeave={this.hideOverlay}
              >
                { overlay }
            {this.props.photo.photoUrl ? (
              <img className='image-preview-img'
                src={this.props.photo.photoUrl} />) : (
              <PhotoEditUploadLoader />)}
              </div>
            </div>
        {Object.values(this.props.photo).length > 0 ? (
          <div className="edit-form-container">
            <form className="photo-upload-form" onSubmit={this.handleSubmit}>

              <div className="form-input">
                <label htmlFor="photo-title">Title</label>
                <input type="text" name="photo-title"
                  value={ this.props.photo.title }
                  className="text-input" onChange={this.handleInput('title')}
                />
              </div>

              <div className="form-input">
                <label htmlFor="photo-description">Description</label>
                <textarea name="photo-description"
                  value={this.props.photo.description}
                  className="description-input" onChange={this.handleInput('description')} />
              </div>

              <div className="form-input">
                <label htmlFor="photo-lens">Lens</label>
                <input type="text" name="photo-lens"
                  value={ this.props.photo.lens }
                  className="text-input" onChange={this.handleInput('lens')}
                />
              </div>

              <div className="form-input">
                <label htmlFor="photo-camera">Camera</label>
                <input type="text" name="photo-camera"
                  value={ this.props.photo.camera }
                  className="text-input" onChange={this.handleInput('camera')}
                />
          </div>
          
              <div className="form-input">
                <label htmlFor="photo-location">Location</label>
                <input type="text" name="photo-location"
                  value={ this.props.photo.location }
                  className="text-input" onChange={this.handleInput('location')}
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
        ): (
          <PhotoEditFormLoader />
          ) 
        }
        </div>
    )
  }

}