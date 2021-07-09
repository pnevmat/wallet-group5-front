import React, { Component } from "react";
import Spinner from "react-loader-spinner";

export default class App extends Component {
  //other logic
  render() {
    return (
      <Spinner
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={2500} //3 secs
      />
    );
  }
};
