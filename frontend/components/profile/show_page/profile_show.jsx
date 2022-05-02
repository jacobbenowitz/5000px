import React from "react";
import { selectProfilePhotos } from "../../../reducers/selectors";

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.profile,
      user: this.props.user,
      photos: [],
    };
  };
  updatePhotos = photos => {
    debugger
    this.setState({
      photos: selectProfilePhotos(photos, this.props.profile.photoIds),
    });
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.profileId).then((profile) => {
      debugger
      this.setState({ profile: profile }, () => {
        this.props.fetchPhotos().then(photos => {
          this.updatePhotos(photos);
        });
      })
      })
  };


  render() {
    const {profile} = this.props;
    debugger
    if (this.state.photos.length === 0) {
      return ( <h2>Loading...</h2>
      )
    } else {
      debugger
      return (
        <div id="photos-index-test">
          <ul className="photo-gallery">
            {this.state.photos.map(photo => {
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