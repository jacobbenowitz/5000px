import React from "react";
import SuccessModal from "../modal/success_modal";
import PhotoEditFormLoader from "./content-loaders/photo-edit-loader";
import PhotoEditUploadLoader from "./content-loaders/photo-edit-upload-loader";
import TextareaAutosize from "react-textarea-autosize";

export default class PhotoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      title: "",
      description: "",
      location: "",
      camera: "",
      lens: "",
      taken: "",
      category: "",
      photoUrl: "",
    };
    this.bindHandlers()
  }

  bindHandlers() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId)
  }

  componentDidUpdate() {
    const { photo } = this.props;
    debugger
    if (photo && this.state.id !== photo.id) {
      this.setState({
        id: photo.id,
        title: photo.title,
        description: photo.description,
        location: photo.location,
        camera: photo.camera,
        lens: photo.lens,
        taken: photo.taken,
        category: photo.category,
        photoUrl: photo.photoUrl,
      })
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();

    this.props.updatePhoto(this.state)
      .then(() => {
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
    // todo: make a confirmation modal
    this.props.deletePhoto(photoId)
  };

  render() {
    let overlay = (
      <div className="img-preview-overlay img-overlay-hidden">
        <i onClick={this.deletePhoto}
          className="fa-solid fa-trash fa-xl delete-icon">
        </i>
      </div>
    )

    const CATEGORIES = [
      { label: "Select a category", value: '' },
      { label: "Abstract", value: 'abstract' },
      { label: "Animals", value: 'animals' },
      { label: "Chocolate", value: 'chocolate' },
      { label: "Music", value: 'music' },
      { label: "Minimalism", value: 'minimalism' },
      { label: "Sports", value: 'sports' }
    ]

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
            <form className="photo-upload-form"
              onSubmit={this.handleSubmit}>

              <div className="form-input">
                <label htmlFor="photo-title">Title</label>
                <input type="text" name="photo-title"
                  value={ this.state.title }
                  className="text-input" onChange={this.handleInput('title')}
                />
              </div>

              <div className="form-input">
                <label htmlFor="photo-description">Description</label>
                <TextareaAutosize
                  value={this.state.description}
                  onChange={this.handleInput('description')}
                  name="photo-description"
                  className="description-input"
                />
              </div>

              <div className="form-input">
                <label htmlFor="photo-category">Category</label>
                <select name={'photo-category'}
                  value={this.state.category}
                  onChange={this.handleInput('category')}
                  className="text-input select">
                  {
                    CATEGORIES.map((category, i) =>
                      <option key={`category-${i}`}
                        value={category.value}
                      >{category.label}</option>
                    )}
                </select>
              </div>

              <div className="form-input">
                <label htmlFor="photo-date-taken">Date Taken</label>
                <input type='date' name='photo-date-taken'
                  value={this.state.taken}
                  onChange={this.handleInput('taken')}
                  className="date-input">
                </input>
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