import React from "react"

export default class ProfileCoverInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cover: '',
      photoUrl: '',
      id: '',
    }
    this.handleCoverFile = this.handleCoverFile.bind(this);
    this.toggleInputForm = this.toggleInputForm.bind(this);
    this.handleCoverSubmit = this.handleCoverSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({id: this.props.profile.id})
  }


  async handleCoverSubmit() {
    const formData = new FormData();

    if (this.state.cover) {
      formData.append('profile[cover]', this.state.cover);
      formData.append('profile[id]', this.state.id);
    }
    await this.props.updateProfilePhoto(formData, this.props.profile.id);
    // this.props.openModal("success");
  }

  async handleCoverFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        cover: file,
        photoUrl: fileReader.result,
      }, () => this.handleCoverSubmit())
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  toggleInputForm(e) {
    e.stopPropagation;
    const inputForm = document.getElementById('cover-input')
    if (inputForm.className.includes('hide')) {
      inputForm.className = 'file-input-wrapper cover show'
    } else {
      inputForm.className = 'file-input-wrapper cover hide'
    }
  }

  render() {
    const { currentCover, profile } = this.props;

    let coverStyle;
    if (this.state.photoUrl.length) {
      coverStyle = ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), 
        rgba(0, 0, 0, 0)), url(${this.state.photoUrl})`
      })
    } else {
      coverStyle = ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), 
        rgba(0, 0, 0, 0)), url(${currentCover})`
      })
    }
    
    return (
      <div
        className="cover-img-box profile"
        style={coverStyle}
        onMouseEnter={this.toggleInputForm}
        onMouseLeave={this.toggleInputForm}
        id="cover-img-box-input"
      >
        <div id="cover-input-wrapper"
          className="file-input-wrapper cover hide">
          <label htmlFor="cover-input" className="cover-input-label">
            <i className="fa-solid fa-arrow-up-from-bracket fa-sm" />
            <input
              type='file'
              id="cover-input"
              onInput={this.handleCoverFile}
            />
          </label>
        </div>
      </div>
    )
  }
};