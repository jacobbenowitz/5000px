import React from "react";
import { selectProfilePhotos, selectGalleryDetails } from "../../../reducers/selectors";
import { Link } from "react-router-dom";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";
import { AvatarLg } from "../../avatar/avatar_lg";
import ProfileDetailsLoader from "../content_loaders/profile-details-loader";
import { ProfileDetails } from "./profile_details";
import ProfileRows from "./profile_photo_gallery";
import DiscoverGallery from "../../galleries/discover_gallery";
import { buildGridGalleryProps, asArray } from "../../../reducers/selectors"

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
    const { photos, profile, profileId, fetchPhotos, fetchProfile } = this.props;

    profile && photos ? (
      this.setState({
        photos: buildGridGalleryProps(photos),
        profile: profile,
    }) ) : photos ? (
      fetchProfile(profileId)) : fetchPhotos() 
    
  };



  render() {
    const { profile, photos } = this.props;
    debugger
    const coverStyle = profile.cover ? ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), 
      rgba(0, 0, 0, 0)), url(${profile.cover})`
    }) : (null);
    

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
          { profile ? (
              <ProfileDetails profile={profile}
                isCurrentProfile={this.props.isCurrentProfile} />
            ) : (
            <div className="profile-loader-container">
              <ProfileDetailsLoader />
            </div>
            )}
        </section>
        
        {/* <ProfileRows photos={photos}/> */}
        {photos && profile  ?
          (
          // <DiscoverGallery images={ photos }/>
          <ProfileRows photos={photos}/>
          ) : (
            <GridLoader />
          )}


      </div>
    )
  }
}