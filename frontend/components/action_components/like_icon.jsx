import React from "react";

export default class LikeIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoId: this.props.photoId,
      likerId: this.props.currentProfile,
      isLiked: this.props.isLiked,
      likes: this.props.likes,
      likeCount: this.props.likes.length,
      like: {}
    }
    this.newLike = this.newLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  componentDidMount() {
    this.props.getLikes();
  }

  newLike(e) {
    e.preventDefault();
    const { photoId, likerId, likeCount } = this.state;
    const like = {
      liker_id: likerId,
      photo_id: photoId
    };
    this.props.newLike({like: like}).then(like => {
      this.setState({
        likeCount: likeCount + 1,
        isLiked: true,
        like: like
      })
    })
  }

  removeLike(e) {
    e.preventDefault();
    const { photoId, likerId, likeCount, likes } = this.state;
    const like = likes.filter(like =>
      like.photoId === photoId && like.likerId === likerId)

    this.props.deleteLike(like.id).then(likeId => {
      this.setState({
        isLiked: false,
        likeCount: likeCount - 1,
        like: {}
      })
    })
  }


  render() {
    const { isLiked } = this.state;

    const isLikedIcon = (
      <i onClick={this.removeLike}
        className="fa-solid fa-heart fa-xl like-icon liked"></i>
    )

    const notLikedicon = (
      <i onClick={this.newLike}
        className="fa-regular fa-heart fa-xl like-icon default"
      />
    )
    
    return (
      <div className="like-icon-container">
        <span> { this.state.likeCount } </span>
        {isLiked ? ( isLikedIcon ) : ( notLikedicon )}
      </div>
    )
  }
}