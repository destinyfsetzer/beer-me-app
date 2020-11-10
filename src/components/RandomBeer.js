import React, { Component } from "react";

class RandomBeer extends Component {
  getRandomBeer = () => {
    this.props.getRandomBeer();
  };

  render() {
    const { random } = this.props;
    let beerAbv = random.abv !== undefined ? `ABV: ${random.abv}%` : "";
    let beerCategoryDescription =
      random.style !== undefined
        ? `Description: ${random.style.description}`
        : "";
    let beerCategory =
      random.style !== undefined ? `Style: ${random.style.category.name}` : "";

    return (
      <div className="random-container">
        <button
          className="refresh-button btn mb-1"
          onClick={() => this.getRandomBeer()}
        >
          <i className="fas fa-sync"></i>Random Beer
        </button>

        <div className="card mt-2" key={random.id}>
          <div className="card-body">
            <h4>{random.nameDisplay}</h4>
            <p>{beerAbv}</p>

            <p>{beerCategory}</p>
            <p>{beerCategoryDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
