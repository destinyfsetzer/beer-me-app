import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo-brown.png";
// import { checkAuth } from "./CheckAuth";

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
    let logoImage = logo;
    return (
      <div className="sidebar col-sm-3 p-0">
        <div className="sidebar-title">
          <img className="logo" src={logoImage} alt="beer-logo" />
        </div>

        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                exact
                to="/search"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-search"></i>Search
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                to="/beer-categories"
                activeClassName="active"
                onClick={() => this.props.getCategories()}
                className="nav-link"
              >
                <i className="fas fa-list"></i>Categories
              </NavLink>
            </li> */}

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

            {/* <li className="nav-item">
              <NavLink
                to="/match"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fas fa-question"></i>Beer Matcher
              </NavLink>
            </li> */}
            {/* <li className="nav-item"> */}
            {/* <NavLink
                to="/favorites"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-bookmark"></i>Favorites
              </NavLink> */}
            {/* </li> */}
            <li
              onClick={() => {
                document.cookie = "loggedIn=";
                window.location.replace("/");
              }}
              className="nav-item"
            >
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-user"></i>Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
