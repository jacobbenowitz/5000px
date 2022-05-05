import React from "react";
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import { Link, Redirect } from "react-router-dom";
import { buildGridGalleryProps } from "../../reducers/selectors";

export default class DiscoverGallery extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   images: defaultProps
    // };
    // const images2 = buildGridGalleryProps(this.props)
  }

  setCustomTags (i) {
    return (
      i.tags.map((t) => {
        return (
          <div key={t.key} style={customTagStyle}>
            {t.value} 
          </div>
        );
      })
    );
  }

  render() {
    const images = this.props.images.map((img) => {
      console.log(img.caption)
      debugger
      img.customOverlay = (
        <div className="photo-caption">
          <div style={captionStyle}>
            <div>
              {img.caption}
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
          tagStyle={customTagStyle}
          enableLightbox={false}
          rowHeight={375}
          margin={12}
        />
      </div>
    )
  }
}

DiscoverGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element ///// CAN BE AN ELEMENT ?!?!
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

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
  top: "0px",
  width: "100%",
  position: "absolute",
  transition: 'opacity 0.2s ease 0s, max-height 0.2s ease 0s',
  color: "white",
  background: "linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
  zIndex: "10",
  padding: "8px",
}

const customTagStyle = {
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};