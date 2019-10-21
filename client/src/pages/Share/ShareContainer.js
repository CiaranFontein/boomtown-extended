import React, { Component } from "react";
import Share from "./Share";
// import FullScreenLoader from '../../components/FullScreenLoader';
// import { Query } from 'react-apollo';
// import { } from '../../apollo/queries';
// Hint: query tags

class ShareContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Share />;
  }
}

export default ShareContainer;
