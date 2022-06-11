import React from "react"
import { AvatarLg } from "../../avatar/avatar_lg"

export default class ProfileAvatarInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      avatar: '',
      photoUrl: '',
      id: '',
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({id: this.props.profile.id})
  }


  async handleSubmit() {
    const formData = new FormData();

    if (this.state.avatar) {
      formData.append('profile[avatar]', this.state.avatar);
      formData.append('profile[id]', this.state.id);
    }
    await this.props.updateProfilePhoto(formData, this.props.profile.id);
    // this.props.openModal("success");
  }

  async handleFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        avatar: file,
        photoUrl: fileReader.result,
      }, () => this.handleSubmit())
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const { currentAvatar, profile, updateAvatar } = this.props;

    return (
      <div className='avatar-form'
        id='avatar-form-profile'
      >
        <div className="file-input-wrapper avatar">
          <label htmlFor="avatar-input" className="avatar-input-label">
            <i className="fa-solid fa-arrow-up-from-bracket fa-sm" />
            <input
              type='file'
              id="avatar-input"
              onInput={this.handleFile}
            />
          </label>
        </div>

        <div className="profile-avatar-container-form">
          <AvatarLg
            // avatar={this.state.photoUrl.length ? this.state.photoUrl : currentAvatar}
            profile={profile}
          />
        </div>
      </div>
    )
  }
};