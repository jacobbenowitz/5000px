import React from "react";
import { selectProfilePhotos, selectGalleryDetails } from "../../../reducers/selectors";
import { Link } from "react-router-dom";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";
import { AvatarLg } from "../../avatar/avatar_lg";
import ProfileDetailsLoader from "../content_loaders/profile-details-loader";
import { ProfileDetails } from "./profile_details";
import ProfileRows from "./profile_photo_gallery";
import DiscoverGallery from "../../galleries/discover_gallery";
import { buildGridGalleryProps } from "../../../reducers/selectors"
import GridLoader from '../content_loaders/profile-details-loader'

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const { photos, profile, profileId,
      fetchPhotos, fetchProfile } = this.props
    
    fetchProfile(profileId)
    fetchPhotos() 

  }


  render() {
    const { profile, user, photos } = this.props;

    const coverStyle = profile.cover ? ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), 
      rgba(0, 0, 0, 0)), url(${profile.cover})`
    }) : (null);
    
    console.log(`render: ${photos}`)
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
            <ProfileDetails
              profile={profile}
              user={user}
              isCurrentProfile={this.props.isCurrentProfile} />
            ) : (
            <div className="profile-loader-container">
              <ProfileDetailsLoader />
            </div>
            )}
        </section>
        
        {photos  ?
          (
            <ProfileRows photos={photos}/>
          ) : (
            <GridLoader />
          )}

        <div className='image-wrapper'>
          <div className="spacer-test"></div>
        </div>
      </div>
    )
  }
}