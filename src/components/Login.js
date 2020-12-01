import React, { Component } from "react";
import { Redirect } from "react-router";
import {
  TextField,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

class App extends Component {
  state = {
    userName: "",
    userPassword: "",
    redirect: false,
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    const userObject = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };

    this.props.loginUser(userObject);
  };

  createAccount = (e) => {
    const userObject = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };
    e.preventDefault();
    this.props.addUser(userObject);
    if (this.props.user.userName !== "") {
    } else {
    }
  };
  // componentDidUpdate() {
  //   if (this.props.user.userName !== "") {
  //     document.cookie = "loggedIn=true;max-age=600*1000";
  //     this.setState({ redirect: true }); //leave this alone.
  //   } else {
  //   }
  // }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="App">
        <Container maxWidth="sm">
          <h1>Login</h1>
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.userName}
              name="userName"
              label="Name"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.userPassword}
              name="userPassword"
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            <br />
            <Button
              variant="contained"
              className="add-user"
              onClick={this.toggleDialog}
            >
              Sign Up
            </Button>
          </form>
          <div>
            <Dialog open={this.state.open} onClose={this.toggleDialog}>
              <DialogTitle>Create Account</DialogTitle>
              <DialogContent>
                <form
                  onSubmit={this.createAccount}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                  }}
                >
                  <TextField
                    id="userName"
                    placeholder="User Name"
                    value={this.state.userName}
                    onChange={this.handleTextChange}
                    name="userName"
                    label="Name"
                    type="text"
                    required
                  />
                  <TextField
                    id="userPassword"
                    placeholder="User Password"
                    value={this.state.address}
                    onChange={this.handleTextChange}
                    name="userPassword"
                    label="Password"
                    type="password"
                    required
                  />
                  <br />
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;

// import React, { useState, useEffect } from "react";
// // import { checkAuth } from "./CheckAuth"
// import {
//   makeStyles,
//   Container,
//   Box,
//   Grid,
//   Link,
//   TextField,
//   CssBaseline,
//   Button,
// } from "@material-ui/core/";
// import logo from "../images/logo-brown.png";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: "#D59737",
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//     color: "#D59737",
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: "#605948",
//   },
//   login: {
//     color: "#605948",
//   },
// }));

// export default function Login() {
//   const [users, setUsers] = useState([]);
//   // const [redirectHome, setRedirectHome] = React.useState(false);
//   const classes = useStyles();

//   // useEffect calls the function that will fetch data from backend and set state with response.
//   useEffect(() => {
//     callBackendAPI()
//       .then((res) => setUsers(res))
//       .catch((err) => console.log(err));
//   }, []);

//   // Fetches our GET route from the Express server.
//   const callBackendAPI = async () => {
//     const response = await fetch("/users");
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message);
//     }
//     return body;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     document.cookie = "loggedIn=true;max-age=60*1000";
//     window.location.replace("/search");
//     // props.history.push("/search");
//     // setRedirectHome(true);
//   };

//   // if (redirectHome) {
//   //   return <Redirect to="/search" />;
//   // }
//   return (
//     <Container component="main" maxWidth="xs" className="login-form">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <img className="logo" src={logo} alt="beer-logo" />
//         <form onSubmit={handleSubmit} className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             type="text"
//             id="userName"
//             label="username"
//             name="userName"
//             autoComplete="userName"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link href="/signup" className={classes.form} variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}></Box>
//     </Container>
//   );
// }
