import React from "react";

export default class SinglePhotoShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
    debugger
    // this.props.fetchPhoto(this.props.photoId);
  }

  componentDidMount() {
    debugger
    // if (this.props.photo)
  }

  render() {
    debugger
    const { photo, profile, user, currentUser } = this.props;
    // refactor into components
    const imageViewer = (
      <div className="lg-single-image-container">

        <div className="image-top-icons">
          <a href={"#"}>
            <i className="fa-solid fa-up-right-and-down-left-from-center fa-xl">
            </i>
          </a>
          <a href={"#"}>
            <i className="fa-solid fa-arrow-left-long fa-xl"></i>
          </a>
        </div>

        <div className="image-nav-icons">
          <i className="fa-solid fa-angle-left fa-xl"></i>
          <i className="fa-solid fa-angle-right fa-xl"></i>
        </div>
        <img src={photo.photoUrl}
          className="photo-large"
          alt={photo.title}></img>
      </div>
    )

    // all links need to be updated
    // turn each icon into a component that accepts props with correct link
    const photoActions = (
      <div className="photo-action-icons">
        <a href={'#'} className="photo-icon-link like">
          <i className="fa-regular fa-heart"></i>
        </a>
        <a href={'#'} className="photo-icon-link share">
          <i className="fa-solid fa-share-nodes"></i>
        </a>
      </div>
    )

    // all links need to be updated
    const profileDetails = (
      <div className="photo-detail-summary">
        {/* TODO use user avatar component */}
        {/* <img className="user-avatar-lg" src={user.avatar}></img> */}
        {/* removing profile_avatar, needs to be replaced w/above */}
        <div className="avatar-container">
          <img className="user-avatar-lg" src={profile.profile_avatar}></img>
        </div>

        <div className="user-details">
          <h3>{photo.title}</h3>
          <span className="photo-user-name">by
            {" " + profile.first_name + " " + profile.last_name} </span>
          <span> • </span>
          <a src={'#'} className="follow-link">Follow</a>
        </div>

        <div className="photo-details">
          {/* location */}
          <span><strong>Uploaded:</strong> about { photo.created_at } hours ago </span>
        </div>

      </div>
    )

    return (
      <div className="profile-detail-container">
        {imageViewer}
        {photoActions}
        {profileDetails}
      </div>
    )
  }
}