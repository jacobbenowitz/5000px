import React from "react";
import { selectProfilePhotos, selectGalleryDetails } from "../../../reducers/selectors";
import { Link } from "react-router-dom";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";
import { AvatarLg } from "../../avatar/avatar_lg";
import ProfileDetailsLoader from "../content_loaders/profile-details-loader";
import { ProfileDetails } from "./profile_details";
import ProfileRows from "./profile_photo_gallery"

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      profile: {},
    }
    debugger
  }
  
  componentDidMount() {
    let { photos, profile } = this.props;

    Object.keys(profile).length === 0 ? (
      this.props.fetchProfile(this.props.profileId)
    ) : photos.length === 0 ? (
      this.props.fetchPhotos()
      ) : (
          this.setState({
            photos: this.props.photos,
            profile: this.props.profile
        })
    )
        
    //   photos.length === 0 ? (
    //     .then((photos) => 
    //       this.setState({
    //         photos: this.props.photos
    //         )}
    //         )
    // ) : this.render()
    //   .then((profile) => 
    //       this.setState({
    //         profile: this.props.profile
    //       }))
    
  };





  render() {
    const { profile, photos } = this.state;
    debugger
    const coverStyle = profile.cover ? ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), 
      rgba(0, 0, 0, 0)), url(${profile.cover})`
    }) : (null);
    

    console.log(this.state);

    return ( 
      <div className="profile-show-container" >

        <div className="profile-cover-container">
          <div className="profile-avatar-container">
            <AvatarLg profile={profile} />
          </div>
          {profile.cover ? (
            <div className="cover-img-box" style={coverStyle} /> 
          ) : ( <CoverPhotoLoader /> )}
        </div>

        <section className="profile-details-container">
          {Object.keys(profile).length > 0 ? (
              <ProfileDetails profile={profile}
                isCurrentProfile={this.props.isCurrentProfile} />
            ) : (
            <div className="profile-loader-container">
              <ProfileDetailsLoader />
            </div>
            )}
        </section>
        
        {/* { photos.length > 0 ? (
          <ProfileRows />
          ) : ( <h2>Poop</h2> )} */}
        <div id="profile-gallery-box">
          <ProfileRows />
        </div>
      </div>
    )
  }
}