import React from "react";
import { withRouter } from "react-router-dom";

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.props.fetchPhoto(this.props.photo.id);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/photos/${this.props.photo.id}`)
  }

  render() {
    const { photo, user, profile, fetchPhoto } = this.props;
    debugger
    const photoOverlay = (
      <div className="photo-data-overlay">
        <div className="top-img-overlay">
          <span>{photo.title}</span>
        </div>
        <div className="bot-img-overlay">
          <div className="left-bot-overlay">
            {/* update avatar to use user.avatar */}
            {/* <img className="user-avatar-lg" src={profile.profile_avatar}></img> */}
            <span>{profile.first_name + profile.last_name}</span>
          </div>

          {/* refactor to components: like comment etc icons linked */}
          <div className="right-bot-overlay">
            <a href={'#'} className="photo-icon-link like">
              <i className="fa-regular fa-heart"></i>
            </a>
            {/* bonus: add comment link icon*/}
          </div>
        </div>
      </div>
    )

    // todo: add photo poster(user)'s name and avatar to state photos slice, so we can add to photo index item 
    return (
      <div className="photo-index-item"
        onClick={this.handleClick}
      >
        { photoOverlay }
        <img src={photo.photoUrl} />
      </div>
    )
  }
}

export default withRouter(PhotoIndexItem);