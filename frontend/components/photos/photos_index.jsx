import React from "react";
import { Link } from "react-router-dom";
import PhotoIndexItem from "./photo_index_item";

export default class PhotosIndex extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const { photos, profiles, users } = this.props;

    if (photos.length === 0) {
      return (
        <h2>Loading...</h2>
      )
    } else {
      return (
        <div id="photos-index-test">
          <ul className="photo-gallery">
            {photos.map(photo => {
              return (
                <PhotoIndexItem
                  photo={photo}
                  profile={profiles[photo.profileId]}
                  user={users[photo.user_id]}
                  fetchPhoto={this.props.fetchPhoto}
                  key={photo.id}
                />
              )
            })}
          </ul>
        </div>
      )
    }
  }
}
