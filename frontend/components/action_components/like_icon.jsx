import React from "react";

export default class LikeIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: this.props.photoId,
      likerId: this.props.currentProfile,
      likeCount: this.props.likeCount,
      isLiked: this.props.isLiked
    }
    this.newLike = this.newLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    debugger
  }

  newLike(e) {
    e.preventDefault();
    const { photoId, likerId, likeCount } = this.state;
    debugger
    const like = {
      liker_id: likerId,
      photo_id: photoId
    };
    this.props.newLike({like: like}).then(like => {
      this.setState({
        likeCount: likeCount + 1,
        isLiked: true
      })
    })
  }

  removeLike(e) {
    e.preventDefault();

    debugger

    const { photoId, likerId, likeCount } = this.state;
    const { likes } = this.props;

    const like = likes.filter(like =>
      like.photoId === photoId && like.likerId === likerId)

    this.props.deleteLike(like.id).then(likeId => {
      this.setState({
        isLiked: false,
        likeCount: likeCount - 1,
      })
    })
  }


  render() {
    const { isLiked } = this.state;

    const isLikedIcon = (
      <i onClick={this.removeLike}
        className="fa-solid fa-heart fa-xl like-icon-liked"></i>
    )

    const notLikedicon = (
      <i onClick={this.newLike}
        className="fa-regular fa-heart fa-xl like-icon-default"
      />
    )
    return (
      isLiked ? ( isLikedIcon ) : ( notLikedicon )
    )
  }
}