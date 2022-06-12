import React from "react";
import { Link } from "react-router-dom";
import LandingRows from "../photo_feed/landing_photo_gallery";

const IDLE = 'IDLE'
const BUSY = 'BUSY'
const DONE = 'DONE'

export default class EditorsChoiceLanding extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: IDLE
    }
  }
  componentDidMount() {
    const {fetchPhotos} = this.props;
    this.setState({ status: BUSY }, () => 
      fetchPhotos()
    )
  }


  componentDidUpdate() {
    const { editorsPhotos } = this.props;
    const { status } = this.state;

    if (editorsPhotos && status === BUSY) {
      this.setState({
        status: DONE
      })
    }
  }

  componentWillUnmount() {
    this.setState({ status: IDLE })
  }

  render() {
    const { editorsPhotos } = this.props;
    const { status } = this.state;
    let editorsGallery;

    if (status === DONE) {
      let shuffled = editorsPhotos.sort(() => Math.random() - 0.5)
      let photos = shuffled.slice(0, 8)
      editorsGallery = (
        <LandingRows
          photos={photos}
        />
      )
    }

    return (
      <div id="editors-choice-landing" >
          
        <div className="landing-image-header">
          <div className="landing-header-content">
            <div className="icon-container">
              <img src="https://my5000px-static.s3.amazonaws.com/editors-choice.svg" />
            </div>
            <h2>Editor's Choice</h2>
            <span className="photo-credit">
              Photo by <strong>Jane Smith</strong>
            </span>
          </div>
        </div>

        <div id="editors-gallery"
          className="landing-gallery-container">
          <div className="landing-gallery-header">
            <h4>The best of the best.</h4>
            <span>Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what’s new.</span>
            <Link to={'/discover/editors'} className="landing-large-button">View Editor's Choice</Link>
          </div>
          {editorsGallery}
        </div>
      </div>
    )
  }
}