import React from "react";

export default class LikeIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.isLiked,
      likeCount: this.props.likes.length,
    }
    this.newLike = this.newLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  componentDidMount() {
    const { photo, likes, currentProfile, allLikes } = this.props;
    let isLiked = likes.filter(like =>
      like.liker_id === currentProfile.id).length > 0
    this.setState({
      isLiked: isLiked,
      likeCount: likes.length
    })
  }

  newLike(e) {
    e.preventDefault()
    e.stopPropagation()
    const { likeCount } = this.state;
    const { currentProfile, photo, createLike } = this.props;
    const like = {
      liker_id: currentProfile.id,
      photo_id: photo.id,
    };
    createLike(like)
    this.setState({
      isLiked: true,
      likeCount: likeCount + 1,
    })
  }

  removeLike(e) {
    e.preventDefault()
    e.stopPropagation()
    const { likeCount } = this.state;
    const { likes, removeLike, currentProfile } = this.props;
    const like = likes.filter(like =>
      like.liker_id == currentProfile.id)[0]

    removeLike(like.id)
    this.setState({
      isLiked: false,
      likeCount: likeCount - 1,
      like: {}
    })
  }


  render() {
    const { isLiked, likeCount } = this.state;

    const isLikedIcon = (
      <i className="fa-solid fa-heart fa-xl like-icon liked" />
    )

    const notLikedicon = (
      <i className="fa-regular fa-heart fa-xl like-icon default"/>
    )
    
    return (
      <div className="like-icon-container"
        onClick={isLiked ? this.removeLike: this.newLike}
      >
        <span className="like-counter"> { likeCount } </span>
        { isLiked ? isLikedIcon : notLikedicon }
      </div>
    )
  }
}