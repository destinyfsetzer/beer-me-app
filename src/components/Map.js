import React, { Component } from "react";
import Iframe from "react-iframe";

class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <Iframe
        src="https://www.google.com/maps/d/embed?mid=1igis_otRJcmImVrGoOvEEp4mwrMt7Eui"
        width="640"
        height="480"
      ></Iframe>
    );
  }
}

export default Map;
