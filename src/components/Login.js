import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { TextField, Button, Container } from "@material-ui/core";

class App extends Component {
  state = {
    username: "",
    password: "",
    redirectHome: false,
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000";
    this.props.setUser(this.state.username);
    console.log(this.state.username);
    this.setState({ redirectHome: true });
    // window.location.replace("/");
  };

  render() {
    if (this.state.redirectHome) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <Button type="submit" className="button" variant="contained">
              Login
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default App;
