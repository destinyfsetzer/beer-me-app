import { Container } from "@material-ui/core";
import React, { Component } from "react";
import Iframe from "react-iframe";

class Map extends Component {
  render() {
    return (
      <Container>
        <Iframe
          src="https://beermapping.com/?lat=30.26715&lon=-97.74306&z=13"
          width="800"
          height="600"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden=""
          tabindex="0"
        ></Iframe>
      </Container>
    );
  }
}

export default Map;
