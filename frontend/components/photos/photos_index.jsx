import React from "react";

export default class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photos;
  }

  componentDidMount() {
    debugger
    this.props.fetchPhotos();
  }

  render() {
    const photos = this.state;
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
