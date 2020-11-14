import React, { Component } from "react";
import IbuSlider from "./../components/Sliders/IbuSlider";
import AbvSlider from "./../components/Sliders/AbvSlider";
import SrmSlider from "./../components/Sliders/SrmSlider";

class Match extends Component {
  setBeerType = (event) => {
    event.preventDefault();

    // triggers the callback after the term has been set into state
    this.setState(
      { term: event.target.dataset.beertype },
      this.handleBeerSubmit
    );
  };

  // callback for setting the beer type
  handleBeerSubmit = () => {
    this.props.onBeerSubmit(this.state.term);
  };

  render() {
    const beerTypes = [
      "Ale",
      "Lager",
      "IPA",
      "Pilsner",
      "Amber",
      "Porter",
      "Stout",
      "Kolsch",
      "Sour Ale",
      "Blonde Ale",
      "Pale Ale",
      "Brown Ale",
      "Saison",
      "Gose",
      "Helles",
      "Scotch Ale",
    ];

    const beerTypesList = beerTypes.map((beerType, index) => (
      <li className="list-group-item" key={index}>
        <a href="/search" data-beertype={beerType} onClick={this.setBeerType}>
          {/* {beerType} */}
        </a>
      </li>
    ));

    return (
      <div className="search-nav mb-2">
        <IbuSlider />
        <AbvSlider />
        <SrmSlider />
        <ul className="nav">
          <li className="list-group-item">
            <button onClick={() => this.props.getAllBeers()}>
              You Should Try...
            </button>
          </li>
          {beerTypesList}
        </ul>
      </div>
    );
  }
}

export default Match;
