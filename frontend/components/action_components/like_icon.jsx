import React from "react";

export default class LikeIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    }
    this.newLike = this.newLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  componentDidMount() {
    const { likes, currentProfile } = this.props;
    let isLiked = likes.filter(like =>
      like.liker_id == currentProfile.id).length >= 1
    this.setState({
      isLiked: isLiked
    })
  }

  newLike(e) {
    e.preventDefault()
    e.stopPropagation()
    const { currentProfile, photo, createLike } = this.props;
    const like = {
      liker_id: currentProfile.id,
      photo_id: photo.id,
    }
    createLike(like)
    this.setState({
      isLiked: true
    })
  }

  removeLike(e) {
    e.preventDefault()
    e.stopPropagation()
    const { likes, removeLike, currentProfile } = this.props;
    const likeId = likes.filter(like =>
      like.liker_id == currentProfile.id)[0].id
    removeLike(likeId)
    this.setState({
      isLiked: false
    })
  }


  render() {
    const { isLiked } = this.state;

    const isLikedIcon = (
      <i className="fa-solid fa-heart fa-xl like-icon liked" />
    )

    const notLikedicon = (
      <i className="fa-regular fa-heart fa-xl like-icon default"/>
    )
    
    return (
      <div className="like-icon-container"
        onClick={isLiked ? this.removeLike: this.newLike}>
      { isLiked ? isLikedIcon : notLikedicon }
      </div>
    )
  }
}