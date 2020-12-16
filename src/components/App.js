import React, { Component } from "react";
import cookie from "cookie";
import brewery from "../api/Proxy";
import Match from "./Match";
import { Route, Redirect } from "react-router";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import SearchNav from "./SearchNav";
import Pagination from "./Pagination";
import BeerList from "./BeerList";
import CategoryList from "./CategoryList";
import RandomBeer from "./RandomBeer";
import "../css/Main.css";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import BeerSchool from "./BeerSchool";
import SignUp from "./SignUp";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  // console.log("this my cookie", cookies.token);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

class App extends Component {
  // cookies = cookie.parse(document.cookie);
  state = {
    beers: null,
    filterBeers: null,
    currentPage: 1,
    numberOfPages: "",
    totalResults: 0,
    categories: [],
    randomBeer: [],
    favorites: [],
  };

  // fetch all data from api
  componentDidMount = async () => {
    const response = await brewery.get("/beers");
    const random = await brewery.get("/random");
    const categories = await brewery.get("/categories");

    this.setState({
      beers: response.data.data,
      filterBeers: response.data.data,
      currentPage: response.data.currentPage,
      numberOfPages: response.data.numberOfPages,
      totalResults: response.data.totalResults,
      randomBeer: random.data.data,
      categories: categories.data.data,
    });
  };

  // gets the beers
  getAllBeers = async () => {
    const response = await brewery.get("/beers");

    this.setState({
      beers: response.data.data,
      currentPage: response.data.currentPage,
      numberOfPages: response.data.numberOfPages,
      totalResults: response.data.totalResults,
    });
  };

  //gets random beer endpoint
  getRandomBeer = async () => {
    const random = await brewery.get("/random");

    this.setState({
      randomBeer: random.data.data,
    });
  };

  //gets beer categories
  getCategories = async () => {
    const categories = await brewery.get("/categories");

    this.setState({
      categories: categories.data.data,
    });
  };

  // search by term
  handleTermSubmit = async (term) => {
    const response = await brewery.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      beers: response.data.data,
      numberOfPages: response.data.numberOfPages,
      totalResults: response.data.totalResults,
    });
  };

  // multiple page info display
  handlePagination = async (currentPage) => {
    const response = await brewery.get("/beers", {
      params: {
        p: currentPage,
      },
    });

    this.setState({
      beers: response.data.data,
    });
  };

  cookies = cookie.parse(document.cookie);

  render() {
    return (
      <Router>
        <div className="main">
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </div>
        <div className="content-area">
          {/* conditionally render sidebar if logged in */}
          {/* {this.cookies.loggedIn && (
            <Sidebar
              onBeerSubmit={this.handleTermSubmit}
              getCategories={this.getCategories}
            />
          )} */}
          <Sidebar
            onBeerSubmit={this.handleTermSubmit}
            getCategories={this.getCategories}
          />
          <main className="site-main container col-sm-8">
            {/* {this.cookies.loggedIn && (
              <Sidebar
                onBeerSubmit={this.handleTermSubmit}
                getCategories={this.getCategories}
              />
            )} */}
            <div className="site-content">
              <ProtectedRoute path="/beerSearch">
                {console.log("anything to get your attention")}
                <SearchBar
                  onBeerSubmit={this.handleTermSubmit}
                  totalResults={this.state.totalResults}
                />
                <SearchNav
                  onBeerSubmit={this.handleTermSubmit}
                  currentPage={this.state.currentPage}
                  getAllBeers={this.getAllBeers}
                />
                <BeerList beers={this.state.beers} />
                <Pagination
                  currentPage={this.state.currentPage}
                  numberOfPages={this.state.numberOfPages}
                  onPageSubmit={this.handlePagination}
                />
              </ProtectedRoute>

              <ProtectedRoute path="/beer-categories">
                <CategoryList categories={this.state.categories} />
              </ProtectedRoute>
              <ProtectedRoute path="/beer-school">
                <BeerSchool />
              </ProtectedRoute>

              <ProtectedRoute path="/random">
                <RandomBeer
                  random={this.state.randomBeer}
                  getRandomBeer={this.getRandomBeer}
                />
              </ProtectedRoute>
              <ProtectedRoute path="/match">
                <Match />
                <BeerList beers={this.state.beers} />
                <Pagination
                  currentPage={this.state.currentPage}
                  numberOfPages={this.state.numberOfPages}
                  onPageSubmit={this.handlePagination}
                />
              </ProtectedRoute>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
