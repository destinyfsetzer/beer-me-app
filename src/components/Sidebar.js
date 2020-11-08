import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  state = { term: "" };

  setBeerType = (event) => {
    event.preventDefault();
    // triggers the callback after the term has been set into state
    this.setState(
      { term: event.target.dataset.beertype },
      this.handleBeerSubmit
    );
  };

  handleBeerSubmit = () => {
    this.props.onBeerSubmit(this.state.term);
  };

  render() {
    return (
      <div className="sidebar col-sm-3 p-0">
        <div className="sidebar-title">
          <h1>BEER ME</h1>
          <h6>discover new brews</h6>
        </div>

        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-search"></i>Search
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/beer-categories"
                activeClassName="active"
                onClick={() => this.props.getCategories()}
                className="nav-link"
              >
                <i className="fas fa-list"></i>Categories
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/beer-school"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-book"></i>Beer School
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/random"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-beer"></i>Random Beer
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/map" className="nav-link" activeClassName="active">
                <i className="fas fa-info-circle"></i>Brewery Map
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
