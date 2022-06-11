import React from "react";
import SinglePhotoLoader from "./content-loaders/single-photo-loader";

export default class ImageViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullScreen: false
    }
    this.toggleFullScreen = this.toggleFullScreen.bind(this)
  }

  toggleFullScreen(e) {
    e.preventDefault()
    this.setState({fullScreen: !this.state.fullScreen})
  }

  render() {
    let imageTopIcons = (
      <div className="image-top-icons">
        <div className="full-screen icon-wrapper"
          onClick={this.toggleFullScreen}
        >
          <i className="fa-solid fa-up-right-and-down-left-from-center fa-xl">
          </i>
        </div>
        <div className="back icon-wrapper"
          onClick={() => this.props.history.goBack()}
        >
          <i className="fa-solid fa-arrow-left-long fa-xl back-arrow"></i>
        </div>
      </div>
    )
    // todo: imageNavIcons (need array of imageIds)
    // let imageNavIcons = (
    //   <div className="image-nav-icons">
    //     <i className="fa-solid fa-angle-left fa-xl"></i>
    //     <i className="fa-solid fa-angle-right fa-xl"></i>
    //   </div>
    // )

    const { fullScreen } = this.state;
    return (
      <>
        <div className={fullScreen ? "full-screen-image-container" : 'hide'}>
          {imageTopIcons}
          <div className="image-container">
            {this.props.photo.photoUrl ? (
              <img src={this.props.photo.photoUrl} className="photo-large" alt={this.props.photo.title} />
            ) : (
              <SinglePhotoLoader className="photo-large" />
            )}
          </div>
        </div>

        <div className="lg-single-image-container">
          {imageTopIcons}
          <div className="image-container">
            {this.props.photo.photoUrl ? (
              <img src={this.props.photo.photoUrl} className="photo-large" alt={this.props.photo.title} />
            ) : (
              <SinglePhotoLoader className="photo-large" />
              )}
          </div>
        </div>
      </>
    )
  }
}