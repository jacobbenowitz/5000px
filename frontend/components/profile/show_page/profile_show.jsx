import React from "react";

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch() {
    this.props.fetchPhotos()
  }


  render() {
    const {photos, profile} = this.props;
    debugger
    if (photos.length === 0) {
      return ( <h2>Loading...</h2>
      )
    } else {
      debugger
      return (
        <div id="photos-index-test">
          <ul className="photo-gallery">
            {photos.map(photo => {
              return (
                <li key={photo.id}>
                  <h5>{photo.title}</h5>
                  <span>{photo.description}</span>
                  <img src={ photo.photoUrl } />
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
}