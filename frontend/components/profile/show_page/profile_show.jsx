import React from "react";

export default class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // };

  }

  componentDidCatch() {
    // 
    this.props.photoIds.forEach(id => {
      this.props.fetchPhoto(id)
    })
  }


  render() {
    return null;
  }
}