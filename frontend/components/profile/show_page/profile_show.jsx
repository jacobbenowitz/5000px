import React from "react";
import { selectProfilePhotos, selectGalleryDetails } from "../../../reducers/selectors";
import { Link } from "react-router-dom";
import CoverPhotoLoader from "../content_loaders/cover_photo_loader";
import { AvatarLg } from "../../avatar/avatar_lg";
import ProfileDetailsLoader from "../content_loaders/profile-details-loader";
import { ProfileDetails } from "./profile_details";
import PhotoLoader from "../content_loaders/photo-loader";
import { getImgSize } from "../../../util/get_img_size";

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos || [],
      profile: this.props.profile || {}
    }
    debugger
  }
  
  componentDidMount() {
    this.props.fetchProfile(this.props.profileId)
    .then((profile) => 
        this.setState({
        profile: this.props.profile
        }))
    
    this.props.fetchPhotos()
      .then(photos => {
        this.setState({
          photos: selectProfilePhotos(photos, this.props.profile.photoIds)
        })
      })
  };



  render() {
    debugger
    // const coverStyle = {
    //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${profile.cover})`
    // }
    console.log(this.state)
    return ( null
      // <div className="profile-show-container" >
      //   <div className="profile-cover-container">
      //     <div className="profile-avatar-container">
      //       <AvatarLg profile={profile} />
      //     </div>
      //     {profile.cover ? (
      //       <div className="cover-img-box"
      //         style={coverStyle}
      //       /> 
      //     ) : (
      //       <CoverPhotoLoader />
      //     )}
      //   </div>
      //   <section className="profile-details-container">
      //       {profile ? (
      //         <ProfileDetails profile={profile}
      //           isCurrentProfile={isCurrentProfile} />
      //       ) : (
      //       <div className="profile-loader-container">
      //         <ProfileDetailsLoader />
      //       </div>
      //       )}
      //   </section>
        
      //   { photos ? (
      //       photos.map(photo => {
      //         <Link to={`/photos/${photo.id}`}>
      //           <div key={photo.id} className="photo-container">
      //             <div className="photo-overlay">
      //               <h5>{photo.title}</h5>
      //             </div>
      //             <img src={photo.photoUrl} />
      //           </div>
      //         </Link>
      //       })
      //     ) : ( <h2>Poop</h2> )}
      //   <div className="profile-gallery-box">
      //   </div>
      // </div>
    )
  }
}