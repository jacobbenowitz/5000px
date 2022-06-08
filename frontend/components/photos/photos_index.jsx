import React from "react";
import { Link } from "react-router-dom";
import PhotoIndexItem from "./photo_index_item";

export default class PhotosIndex extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { photos, profiles, users } = this.props;
    
    return (
      <div id="photos-index-test">
        <ul className="photo-gallery">
          {photos.length > 0 && Object.keys(profiles).length > 0 ? (
            photos.map(photo => {
              return ( <PhotoIndexItem
                photo={photo}
                profile={profiles[photo.profile_id]}
                user={users[photo.userId]}
                key={photo.id} />
          )})) : ( <h2>Loading...</h2> )}
        </ul>
      </div>
    )}
}
