import React from "react"
import { AvatarLg } from "../../avatar/avatar_lg"

export default class ProfileAvatarInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      avatar: '',
      photoFile: null,
      photoUrl: null,
    }
    this.handleFile = this.handleFile.bind(this);
  }


  async handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    if (this.state.photoFile) {
      formData.append('photo[width]', this.state.width);
      formData.append('photo[height]', this.state.height);
      formData.append('photo[title]', this.state.title);
      formData.append('photo[description]', this.state.description);
      formData.append('photo[camera]', this.state.camera);
      formData.append('photo[lens]', this.state.lens);
      formData.append('photo[location]', this.state.location);
      formData.append('photo[photo]', this.state.photoFile);
      formData.append('photo[profile_id]', this.props.profileId);
    }
    await this.props.uploadPhoto(formData);
    this.props.openModal("success");
  }

  async handleFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
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

  render() {
    const { currentAvatar, profile, updateAvatar } = this.props;

    return (
      <div className='avatar-form'>
        <div className="file-input-wrapper">
          <label for="avatar-input" className="avatar-input-label">
            <i className="fa-solid fa-arrow-up-from-bracket fa-sm" />
            <input
              type='file'
              value={this.state.avatar}
              id="avatar-input"
              onChange={this.handleFile}
            />
          </label>
        </div>

        <div className="profile-avatar-container-form">
          <AvatarLg
            profile={profile}
          />
        </div>
      </div>
    )
  }
};