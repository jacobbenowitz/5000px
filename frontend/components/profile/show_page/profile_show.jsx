import React from "react";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";
import { AvatarLg } from "../../avatar/avatar_lg";
import ProfileDetailsLoader from "../content_loaders/profile-details-loader";
import { ProfileDetails } from "./profile_details";
import ProfileRows from "./profile_photo_gallery";
import ProfileAvatarInput from "./profile_avatar_input";
import ProfileCoverInput from "./profile_cover_input";
import { sortByRecent, sortPhotosByRecent } from "../../../reducers/selectors";
import GridLoader from "../../galleries/gallery_grid_loader";

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      status: IDLE,
      profilePhotos: [],
      showFollowsModal: false,
      showFollowingModal: false,
      noPhotos: false,
    }
    this.mounted = false;
    this.bindHandlers()
  }

  bindHandlers() {
    this.toggleFollowsModal = this.toggleFollowsModal.bind(this)
    this.toggleFollowingModal = this.toggleFollowingModal.bind(this)
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    const { profileId, fetchProfile, fetchProfiles, getFollows } = this.props;
    
    window.scrollTo(0, 0)
    this.mounted = true;

    fetchProfile(profileId)
    fetchProfiles()
    getFollows()
  }

  componentDidUpdate() {
    const { status, id, profilePhotos } = this.state;
    const { profile, profileId, fetchPhoto, profilesStatus,
      fetchProfile, fetchProfiles, getFollows } = this.props;

    if (status !== BUSY && this.mounted) {
      if (profileId != id) {
        this.setState({
          id: profileId,
          status: BUSY,
        })
        fetchProfile(profileId)
        fetchProfiles()
        getFollows()
      }
    }


    if (status === BUSY && profilesStatus === DONE && profileId == id) {
      if (profile.photoIds.length === 0) {
        this.setState({
          noPhotos: true,
          status: DONE
        })
      } else if (profile.photoIds.length !== profilePhotos.length) {
        let ordered;
        let photos = [];
        let fetches = [];

        profile.photoIds.forEach(photoId =>
          fetches.push(fetchPhoto(photoId)));

        // use this.mounted to return out of fetches before unmounting
        Promise.all(fetches).then(res => {
          if (!this.mounted) return;

          photos = res.map(action => action.photo.photo)
          ordered = sortByRecent(photos)
          this.setState({
            id: profileId,
            status: DONE,
            noPhotos: false,
            profilePhotos: ordered
          })
        });
      }
    }
  }

  toggleFollowsModal(e) {
    e.preventDefault()
    // e.stopPropagation()
    this.setState({ showFollowsModal: !this.state.showFollowsModal })
  }

  toggleFollowingModal(e) {
    e.preventDefault()
    // e.stopPropagation()
    this.setState({ showFollowingModal: !this.state.showFollowingModal })
  }


  render() {
    const { profile, user, isCurrentProfile, updateProfilePhoto, currentProfile, allFollows, createFollow, removeFollow, getFollows, fetchProfile } = this.props;
    const { status, profilePhotos, showFollowsModal, showFollowingModal, noPhotos } = this.state;

    let avatar, cover, coverStyle, photoGallery;

    if (profile?.cover) {
      coverStyle = (
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${profile.cover})`
        }
      )
      // todo: add fallback image or content placeholder in else statement
    } else {
      coverStyle = (
        {
          backgroundImage: 'url(https://my5000px-static.s3.amazonaws.com/placeholder-image.png)',
          backgroundColor: '#485461'
        }
      )
    }

    if (isCurrentProfile && profile) {
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
    } else if (!isCurrentProfile && profile) {
      avatar = (
        <div className="profile-avatar-container">
          <AvatarLg
            profile={profile}
          />
        </div>
      )
      cover = (
        <div className="cover-img-box profile" style={coverStyle} />
      )
    }

    if (status === DONE) {
      if (noPhotos === false) {
        photoGallery = <ProfileRows photos={profilePhotos} />
      } else {
        photoGallery = (
          <div className="no-photos-uploaded">
            <h4>No photos uploaded yet 😢</h4>
          </div>
        )
      }
    } else {
      photoGallery = (
        <div className="home-feed-gallery">
          <GridLoader />
        </div>
      )
    }
    return (
      <div className="profile-show-container" >
        <div className="profile-cover-container">
          {avatar}
          {cover}
        </div>

        <section className="profile-details-container">
          {profile ? (
            <ProfileDetails
              profile={profile}
              user={user}
              isCurrentProfile={isCurrentProfile}
              allFollows={allFollows}
              createFollow={createFollow}
              removeFollow={removeFollow}
              currentProfile={currentProfile}
              showFollowsModal={showFollowsModal}
              showFollowingModal={showFollowingModal}
              toggleFollowsModal={this.toggleFollowsModal}
              toggleFollowingModal={this.toggleFollowingModal}
              fetchProfile={fetchProfile}
            />
          ) : (
            <div className="profile-details-container">
              <ProfileDetailsLoader />
            </div>
          )}
        </section>

        {photoGallery}

      </div>
    )
  }
}