import React from "react";

export default class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProfilePhoto(this.props.profileId)
  }

  render() {
    // debugger
    return(
    <img src = {this.props.avatar }/>
  )
  }
}
