import React from "react";
import Gallery from 'react-grid-gallery';
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

export default class DiscoverGallery extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   images: defaultProps
    // };
    
  }

  render() {
    
    const images = defaultProps.map((img) => {
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

const defaultProps = [
  {
    src: "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBPdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5882325d3e5533822a0fc8ee82d5a3a2ffcd47f6/toronto.jpg",
    thumbnail: "http://localhost:3000/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBPdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5882325d3e5533822a0fc8ee82d5a3a2ffcd47f6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTlRBd2VEVXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--7f73a9e0246b862f10ce60e93910a23625b1ca47/toronto.jpg",
    thumbnailWidth: 333,
    thumbnailHeight: 500,
    caption: "Jane Smith",
    photoId: 28
  },
  {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 190,
      caption: "286H (gratisography.com)"
  },
  {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      caption: "315H (gratisography.com)"
  },
  {
      src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "201H (gratisography.com)"
  },
  {
      src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
      thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
      thumbnailWidth: 248,
      thumbnailHeight: 320,
      caption: "Big Ben (Tom Eversley - isorepublic.com)"
  },
  {
      src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
      thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
  },
  {
      src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
      thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      caption: "Wood Glass (Tom Eversley - isorepublic.com)"
  },
  {
      src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
      thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
  }
]