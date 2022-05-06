import React from "react";
import SuccessModal from "../modal/success_modal";
import PhotoEditFormLoader from "./content-loaders/photo-edit-loader";
import PhotoEditUploadLoader from "./content-loaders/photo-edit-upload-loader";

export default class PhotoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    // debugger
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.photo !== this.props.photo) {
      this.setState(this.props.photo)
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.updatePhoto(this.state)
      .then(() => {
        // debugger
        this.props.openModal("success");
        this.props.history.push(`/profiles/${this.props.profileId}`);
    })
  };

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
    const { photoId } = this.props;
    // make a confirmation modal
    this.props.deletePhoto(photoId)
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
            {this.state.photoUrl ? (
              <img className='image-preview-img'
                src={this.state.photoUrl} />) : (
              <PhotoEditUploadLoader />)}
              </div>
        </div>
        
        {this.state.photoUrl ? (
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
                <textarea name="description"
                  value={this.state.description }
                  className="description-input" onChange={this.handleInput('description')} />
              </div>

              <div className="form-input">
                <label htmlFor="photo-lens">Lens</label>
                <input type="text" name="lens"
                  value={ this.state.lens }
                  className="text-input" onChange={this.handleInput('lens')}
                />
              </div>

              <div className="form-input">
                <label htmlFor="photo-camera">Camera</label>
                <input type="text" name="camera"
                  value={ this.state.camera }
                  className="text-input" onChange={this.handleInput('camera')}
                />
          </div>
          
              <div className="form-input">
                <label htmlFor="photo-location">Location</label>
                <input type="text" name="location"
                  value={ this.state.location  }
                  className="text-input" onChange={this.handleInput('location')}
                />
              </div>
          
              <div className="form-bot-buttons">
                <span onClick={() => this.props.history.push('/')}
                  className="cancel-upload"
                >Cancel</span>
                <button className="upload-photo-button"
                  type="submit">Update photo</button>
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