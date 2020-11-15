import React, { Component } from "react";
import brewery from "../api/Proxy";
import Match from "./Match";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import SearchNav from "./SearchNav";
import Pagination from "./Pagination";
import BeerList from "./BeerList";
import CategoryList from "./CategoryList";
import RandomBeer from "./RandomBeer";
import "../css/Main.css";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BeerSchool from "./BeerSchool";
import FavoritesPage from "./FavoritesPage";
import SignUp from "./SignUp";

class App extends Component {
  state = {
    beers: null,
    currentPage: 1,
    numberOfPages: "",
    totalResults: 0,
    categories: [],
    randomBeer: [],
    favorites: [],
  };

  componentDidMount = async () => {
    const response = await brewery.get("/beers");
    const random = await brewery.get("/random");
    const categories = await brewery.get("/categories");

    this.setState({
      beers: response.data.data,
      currentPage: response.data.currentPage,
      numberOfPages: response.data.numberOfPages,
      totalResults: response.data.totalResults,
      randomBeer: random.data.data,
      categories: categories.data.data,
    });
  };

  getAllBeers = async () => {
    const response = await brewery.get("/beers");

    this.setState({
      beers: response.data.data,
      currentPage: response.data.currentPage,
      numberOfPages: response.data.numberOfPages,
      totalResults: response.data.totalResults,
    });
  };

  getRandomBeer = async () => {
    const random = await brewery.get("/random");

    this.setState({
      randomBeer: random.data.data,
    });
  };

  getCategories = async () => {
    const categories = await brewery.get("/categories");

    this.setState({
      categories: categories.data.data,
    });
  };

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

  render() {
    return (
      <Router>
        <div className="content-area">
          <Sidebar
            onBeerSubmit={this.handleTermSubmit}
            getCategories={this.getCategories}
          />

          <main className="site-main container col-sm-8">
            <div className="site-content">
              <Route path="/" exact>
                <Login />
              </Route>
              <Route path="/SignUp" exact>
                <SignUp />
              </Route>
              <Route path="/search" exact>
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
              </Route>

              <Route path="/beer-categories">
                <CategoryList categories={this.state.categories} />
              </Route>
              <Route path="/beer-school">
                <BeerSchool />
              </Route>

              <Route path="/random">
                <RandomBeer
                  random={this.state.randomBeer}
                  getRandomBeer={this.getRandomBeer}
                />
              </Route>
              <Route path="/match">
                <Match />
                <BeerList beers={this.state.beers} />
                <Pagination
                  currentPage={this.state.currentPage}
                  numberOfPages={this.state.numberOfPages}
                  onPageSubmit={this.handlePagination}
                />
              </Route>
              <Route path="/favorites">
                <FavoritesPage />
              </Route>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
