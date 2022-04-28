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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
    // this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();

    debugger

    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    // only append the file if it exists in state
    if (this.state.photoFile) {
      formData.append('photo[photo]', this.state.photoFile);
    }
    // TESTING AJAX
    $.ajax({
      method: 'POST',
      url: '/api/photos',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      // success callback
      response => console.log(response.message),
      response => (
        console.log(response.responseJSON)
      )
    )
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

  handleInput = (type) => {
    return e => {
      this.setState(
        { [type]: e.target.value }
      )
    }
  }


  render() {
    
    const preview = this.state.photoUrl ?
      <img src={this.state.photoUrl} /> : null;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-input">
          <label htmlFor="photo-title">Title</label>
          <input type="text" name="photo-title"
            className="text-input" onChange={this.handleInput('title')}/>
        </div>

        <div className="form-input">
          <label htmlFor="photo-description">Description</label>
          <input type="text" name="photo-description"
            className="text-input" onChange={this.handleInput('description')} />
        </div>

        <div className="form-input">
          <label htmlFor="file-upload">Upload file</label>
          <input type="file" name="file-upload"
            className="file-upload-input"
            onChange={this.handleFile} />
        </div>

        <div className="image-preview">
          {preview}
        </div>

        <button className="upload-photo-button"
          type="submit">Upload photo</button>
        
      </form>
    )
  }

}