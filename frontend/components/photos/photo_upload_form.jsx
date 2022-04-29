import React from "react";

export default class PhotoUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger

    const formData = new FormData();
    
    if (this.state.photoFile) {
      // only append the file if it exists in state
      formData.append('photo[title]', this.state.title);
      formData.append('photo[description]', this.state.description);
      formData.append('photo[photo]', this.state.photoFile);
      debugger
    }
    this.props.uploadPhoto(formData);
  }

  handleFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    // debugger

    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result
      }, () => {
        this.toggleDetailForm();
      })
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
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
    const overlay = document.querySelector('#img-preview-overlay');
    overlay.classList.remove('img-overlay-hidden')
    overlay.classList.add('img-overlay-show')
  }
  
  hideOverlay() {
    const overlay = document.querySelector('#img-preview-overlay');
    overlay.classList.remove('img-overlay-show')
    overlay.classList.add('img-overlay-hidden')
  }

  deletePhoto() {
    this.setState({
      title: "",
      description: "",
      photoFile: null,
      photoUrl: null
    }, () => this.toggleDetailForm())
  }


  render() {
    
    const preview = this.state.photoUrl ?
      <img src={this.state.photoUrl}
      /> : null;
    
    const overlay = <div id="img-preview-overlay"
      className="img-overlay-hidden">
      <i id="delete-icon" onClick={this.deletePhoto}
        className="fa-solid fa-trash fa-xl"></i> </div>
    
    return (
      <div className="photo-upload-main">
        <div className="page-top-banner">
          <span>Upload</span>
        </div>

        <div id="photo-upload-step-1">
          <div id="upload-title-box" >
            <h4>Upload photos</h4>
              <div className="upload-input">
                <input type="file" name="file-upload"
                  className="file-upload-input"
                  onChange={this.handleFile} />
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

          <div id="image-preview-container"
            onMouseOver={this.showOverlay}
            onMouseLeave={this.hideOverlay}
          >
            <div className="image-preview">
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
                  value={ this.state.photoFile ? this.state.photoFile.name : ""}
                  className="text-input" onChange={this.handleInput('title')}/>
              </div>

              <div className="form-input">
                <label htmlFor="photo-description">Description</label>
                <input type="text" name="photo-description"
                  className="text-input" onChange={this.handleInput('description')} />
              </div>

              <button className="upload-photo-button"
                type="submit">Upload photo</button>
              
            </form>
          </div>

        </div>


      </div>
    )
  }

}