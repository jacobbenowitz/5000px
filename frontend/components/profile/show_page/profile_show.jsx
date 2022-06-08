import React from "react";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";
import { AvatarLg } from "../../avatar/avatar_lg";
import ProfileDetailsLoader from "../content_loaders/profile-details-loader";
import { ProfileDetails } from "./profile_details";
import ProfileRows from "./profile_photo_gallery";
import ProfileAvatarInput from "./profile_avatar_input";
import ProfileCoverInput from "./profile_cover_input";

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
    const { profile, user, photos, isCurrentProfile, updateProfilePhoto } = this.props;

    let coverStyle = profile.cover ? ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), 
      rgba(0, 0, 0, 0)), url(${profile.cover})`
    }) : (null);

    let avatar, cover;

    if (isCurrentProfile) {
      avatar = (
        <div className="profile-avatar-container">
          <ProfileAvatarInput
            profile={profile}
            currentAvatar={profile.avatar}
            updateProfilePhoto={updateProfilePhoto}
          />
        </div>
      )
      cover = (
        <ProfileCoverInput
          profile={profile}
          currentCover={profile.cover}
          updateProfilePhoto={updateProfilePhoto}
        />
      )
    } else {
      avatar = (
        <AvatarLg
          avatar={profile}
        />
      )
      cover = (
        profile.cover ? (
          <div className="cover-img-box" style={coverStyle} />
        ) : <CoverPhotoLoader />
      )
    }

    return ( 
      <div className="profile-show-container" >
        <div className="profile-cover-container">
          
          {avatar}
          {cover}
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
        
        {photos.length  ?
          (
            <ProfileRows photos={photos}/>
          ) : (
            <span>Content loader here!</span>
          )}

      </div>
    )
  }
}