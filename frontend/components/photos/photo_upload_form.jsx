import React from "react";
import SuccessModal from "../modal/success_modal";
import { getImgSize } from "../../util/get_img_size";
import TextareaAutosize from "react-textarea-autosize";

export default class PhotoUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      location: "",
      camera: "",
      lens: "",
      taken: "",
      category: "",
      photoFile: null,
      photoUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.dragOverHandler = this.dragOverHandler.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  async handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    
    if (this.state.photoFile) {
      formData.append('photo[title]', this.state.title);
      formData.append('photo[description]', this.state.description);
      formData.append('photo[camera]', this.state.camera);
      formData.append('photo[lens]', this.state.lens);
      formData.append('photo[location]', this.state.location);
      formData.append('photo[taken]', this.state.taken);
      formData.append('photo[category]', this.state.category);
      formData.append('photo[photo]', this.state.photoFile);
      formData.append('photo[profile_id]', this.props.profileId);
    }
    await this.props.uploadPhoto(formData);
    this.props.openModal(["success", "Successfully uploaded!"]);
    this.props.fetchProfile(this.props.profileId)
    this.props.history.push(`/profiles/${this.props.profileId}`)
    // this.props.history.push("/home")
  }

  async handleFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();
    // not needed, using rails photo model and view to get img dimensions
    // const { width, height } = await getImgSize(file);
    fileReader.onloadend = () => {
      this.setState({
        title: file.name,
        photoFile: file,
        photoUrl: fileReader.result,
      }, () => {
        this.toggleDetailForm();
      })
    };
    
    if (file) {
      fileReader.readAsDataURL(file);
    }
    const dropZone = document.querySelector('#main-drop-zone');
    dropZone.classList.add('disabled');
    dropZone.classList.remove('enabled');
  }

  handleInput = (type) => {
    return e => {
      this.setState(
        { [type]: e.target.value })
    }
  }
    
  toggleDetailForm() {
    const photoUploadStep1 = document.getElementById('photo-upload-step-1');
    photoUploadStep1.classList.toggle('hidden');

    const imageUploadStep2 = document.getElementById('image-upload-step-2');
    imageUploadStep2.classList.toggle('hidden');
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
    const dropZone = document.querySelector('#main-drop-zone');

    this.setState({
      title: "",
      description: "",
      photoFile: null,
      photoUrl: null
    }, () => {
      this.toggleDetailForm();
      dropZone.classList.remove('disabled');
      dropZone.classList.add('enabled');
    })
  };

  dragOverHandler(e) {
    e.preventDefault();
    const dropZone = document.querySelector('#main-drop-zone');
    const selectButton = document.querySelector('.upload-input')
    selectButton.classList.add('dragging')
    dropZone.classList.add('drag-on')
  }
  
  dragExitHandler(e) {
    e.preventDefault();
    const dropZone = document.querySelector('#main-drop-zone');
    const selectButton = document.querySelector('.upload-input')
    selectButton.classList.remove('dragging')
    dropZone.classList.remove('drag-on')
  }
  
  async handleDrop(e) {
    e.preventDefault();
    const dropZone = document.querySelector('#main-drop-zone');
    dropZone.classList.remove('drag-on')

    const file = e.dataTransfer.files['0'];
    const fileReader = new FileReader();
    const { width, height } = await getImgSize(file);
    
    fileReader.onloadend = () => {
      this.setState({
        title: file.name,
        photoFile: file,
        photoUrl: fileReader.result,
        width: width,
        height: height
      }, () => {
        this.toggleDetailForm();
        dropZone.classList.add('disabled');
        dropZone.classList.remove('enabled');
      })
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  
  render() {
    const CATEGORIES = [
      { label: "Select a category", value: '' },
      { label: "Abstract", value: 'abstract' },
      { label: "Animals", value: 'animals' },
      { label: "Chocolate", value: 'chocolate' },
      { label: "Music", value: 'music' },
      { label: "Minimalism", value: 'minimalism' },
      { label: "Sports", value: 'sports' }
    ]

    const preview = this.state.photoUrl ?
      <img className='image-preview-img' src={this.state.photoUrl}
      /> : null;
    
    const overlay = <div className="img-preview-overlay img-overlay-hidden">
      <i onClick={this.deletePhoto}
        className="fa-solid fa-trash fa-xl delete-icon"></i> </div>
    
    return (
      <div className="upload-container">
        <div id="main-drop-zone" className="enabled"
          onDrop={this.handleDrop}
          onDragOver={this.dragOverHandler}
          onDragLeave={this.dragExitHandler}
        > </div>
        <div className="page-top-banner">
            <span>Upload</span>
          </div>
        <div className="photo-upload-main">

          <div id="photo-upload-step-1">
            <div id="upload-title-box" >
              <i className="fa-solid fa-file-arrow-up fa-2xl"></i>
              <h4>Upload photos</h4>
                <div className="upload-input">
                  <input type="file" name="file-upload"
                    className="file-upload-input"
                    onChange={this.handleFile} 
                  />
                </div>
              <span>Or drag and drop photos anywhere on this page</span>
              <div className="photo-requirements">
                <strong>Photo requirements</strong>
                <span>.png, .jpg, .jpeg only</span>
                <span>Maximum file size is 200MP/megapixels</span>
                <span>No NSFW content</span>
              </div>
            </div>
          </div>

          <div id="image-upload-step-2" className="hidden">

            <div className="left-col-edit">
              <div className="image-preview-container">
                <div className="image-preview"
                  onMouseOver={this.showOverlay}
                  onMouseLeave={this.hideOverlay}
                >
                  { overlay }
                  { preview }
                  <span className="photo-label-upload">{ this.state.photoFile ? this.state.photoFile.name : "" }</span>
                </div>
              </div>
            </div>
            
            <div className="right-col-edit">
              <div className="upload-form-container">
                <form className="photo-upload-form"
                  onSubmit={this.handleSubmit}>

                  <div className="form-input">
                    <label htmlFor="photo-title">Title</label>
                    <input type="text" name="photo-title"
                      value={ this.state.title }
                      className="text-input"
                      onChange={this.handleInput('title')}
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
                      onChange={this.handleInput('category')}
                      defaultValue='Select a category'
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
                      onChange={this.handleInput('taken')}
                      className="date-input">
                    </input>
                  </div>

                  <div className="form-input">
                    <label htmlFor="photo-lens">Lens</label>
                    <input type="text"
                      name="photo-lens"
                      value={ this.state.lens }
                      className="text-input"
                      onChange={this.handleInput('lens')}
                    />
                  </div>

                  <div className="form-input">
                    <label htmlFor="photo-camera">Camera</label>
                    <input type="text" name="photo-camera"
                      value={ this.state.camera }
                      className="text-input" onChange={this.handleInput('camera')}
                    />
                  </div>

                  <div className="form-input">
                    <label htmlFor="photo-location">Location</label>
                    <input type="text" name="photo-location"
                      value={ this.state.location }
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
            </div>
          </div>
        </div>
      </div>
    )
  }

}