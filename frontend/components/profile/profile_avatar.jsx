import React from "react";

export default class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.profileId) {
      this.props.fetchProfilePhoto(this.props.profileId)
    }
  }

  render() {
    debugger
    // if (this.props.pro)
    return (
      <img src = {this.props.avatar }/>
    )
  }
}
