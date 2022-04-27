import React from "react";

export default class PhotoUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // only append the file if it exists in state
    if (this.state.photoFile) {
      formData.append('profile[profile_photo]', this.state.photoFile);
    }
    // TESTING AJAX
    !!!!!
    // END TESTING -> Create actions and container, pass func as props
  }

  handleFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    debugger

    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result
      })
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  render() {
    
    const preview = this.state.photoUrl ?
      <img src={this.state.photoUrl} /> : null;
    
    return (
      <form onSubmit={this.handleSubmit}>

        <div className="form-input">
          <label htmlFor="profile-file-upload">Upload file</label>
          <input type="file" name="profile-file-upload"
            className="profile-upload-input"
            onChange={this.handleFile} />
        </div>

        <div className="image-preview">
          {preview}
        </div>

        <button className="profile-upload-photo-button"
          type="submit">Upload photo</button>
        
      </form>
    )
  }

}