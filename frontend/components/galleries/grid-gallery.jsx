import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';
import { buildGridGalleryProps } from '../../reducers/selectors';
import { Link } from 'react-router-dom';

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

export default class Demo3 extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //     photos: this.props.photos
        // };
    }
  
  // componentDidMount() {
      // debugger
      // this.setState({
      //   photos: this.props.photos
      //   // photos: buildGridGalleryProps(this.props.photos)
      // })
    // }
  // }

    
  render() {
    const photos =
      this.props.photos.map((i) => {
          i.customOverlay = (
            <div style={captionStyle}>
              <div>
                <Link to={i.showLink}>
                  {i.profileName || i.username}</Link>
              </div>
            </div>);
          return i;
      })
    console.log(photos)
    debugger
      // return (
      //   <div style={{
      //       display: "block",
      //       minHeight: "1px",
      //       width: "100%",
      //       overflow: "auto"}}>
      //     <Gallery
      //       photos={photos}
      //       rowHeight={377}
      //       margin={10}
      //       enableLightbox={false}
      //       enableImageSelection={false}/>
      //   </div>
      // );
  }
}

// Demo3.propTypes = {
//     photos: PropTypes.arrayOf(
//         PropTypes.shape({
//             src: PropTypes.string.isRequired,
//             thumbnail: PropTypes.string.isRequired,
//             srcset: PropTypes.array,
//             caption: PropTypes.oneOfType([
//                 PropTypes.string,
//                 PropTypes.element
//             ]),
//             thumbnailWidth: PropTypes.number.isRequired,
//             thumbnailHeight: PropTypes.number.isRequired
//         })
//     ).isRequired
// };