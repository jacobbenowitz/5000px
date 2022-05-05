import React from "react";
import Gallery from 'react-grid-gallery';
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { buildGridGalleryProps } from "../../reducers/selectors";

export default class DiscoverGallery extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   images: defaultProps
    // };
    // const images2 = buildGridGalleryProps(this.props)
    console.log(props)
  }

  render() {
    const images = this.props.images.map((img) => {
      debugger
      let link = (<Link to="/"> {img.caption} </Link>);
      img.customOverlay = (
        <div id={img.id} className="photo-caption">
          <div style={captionStyle}>
            <div>
              {link}
            </div>
          </div>
        </div>
      )
      return img;
    });

    return (
      <div style={galleryStyle}>
        <Gallery
          images={images}
          enableImageSelection={false}
          enableLightbox={false}
          rowHeight={375}
          margin={12}
        />
      </div>
    )
  }
}

const galleryStyle = {
  display: "block",
  width: "100%",
  overflow: "hidden"
}

const captionStyle = {
  display: "block",
  boxSizing: "border-box",
    alignItems: "center",
    height: "50px",
    bottom: "0px",
    width: "100%",
    position: "absolute",
    // transition: opacity 0.2s ease 0s, max-height 0.2s ease 0s,
    color: "white",
    background: "linear-gradient(transparent 0%, rgba(0, 0, 0, 0.6) 100%)",
    zIndex: "10",
    padding: "8px",
}