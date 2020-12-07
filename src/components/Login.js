import React, { useState, useEffect } from "react";
import axios from "axios";
import cookie from "cookie";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      height: "100vh",
      backgroundColor: "#F7F5EE",
    },
    fontFamily: "Raleway, sans-serif",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1571767454098-246b94fbcf70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#E0D9CA",

    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: "1",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F7F5EE",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#D59737",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    backgroundColor: "#F7F5EE",
    color: "#D59737",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#D59737",
  },
  overlayText: {
    color: "#605948",
    fontSize: "16px",
    textAlign: "center",
    padding: "20px",
    margin: "30% 5%",
  },
  titleText: {
    backgroundColor: "rgb(246,243,236, .8)",
    margin: "0px 20px",
    borderRadius: "5px",
  },
  fonts: {
    fontFamily: "Raleway, sans-serif",
  },
}));

export default function Login() {
  const cookies = cookie.parse(document.cookie);
  const [users, setUsers] = useState([]);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [redirectHome, setRedirectHome] = React.useState(false);
  const classes = useStyles();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // useEffect calls the function that will fetch data from backend and set state with response.
  useEffect(() => {
    callBackendAPI()
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);

  // Fetches our GET route from the Express server.
  const callBackendAPI = async () => {
    const response = await fetch("/users");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  const rawResponse = await fetch("http://localhost:3001/auth/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     userName: userName,
    //     password: password,
    //   }),
    // });

    await axios
      .post("http://localhost:3001/auth/login", {
        userName: userName,
        password: password,
      })
      .then((res) => {
        document.cookie = `token=${res.data.token}`;
        console.log(cookies.token);
      });

    document.cookie = "loggedIn=true;max-age=60*1000";
    window.location.replace("/search");
    // props.history.push("/search");
    // setRedirectHome(true);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        {/* <Typography className={classes.beerHeader}>BeerMe</Typography> */}
        <div className={classes.titleText}>
          <Typography className={classes.overlayText}>
            <b>WELCOME TO</b>
            <br />
            <b
              style={{
                fontSize: "4em",
                letterSpacing: "2px",
                color: "#D69836",
                textShadow: "2px 2px #605948",
              }}
            >
              BEERME
            </b>{" "}
            <br />
            BeerMe is a craft beer library and recommendation app.  Here you can
            search for beers by style, learn about their flavors, and get to
            know common beer terms to make you a part of the educated beer
            drinker elite. Cheers!
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography style={{ color: "#605948" }} component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="text"
              id="userName"
              label="username"
              name="userName"
              onChange={handleUsernameChange}
              autoComplete="userName"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlePasswordChange}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" className={classes.form} variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

// import React, { useState, useEffect } from "react";
// // import { checkAuth } from "./CheckAuth"
// import {
//   makeStyles,
//   Container,
//   Box,
//   Grid,
//   Link,
//   TextField,
//   Typography,
//   CssBaseline,
//   Button,
// } from "@material-ui/core/";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Avatar from "@material-ui/core/Avatar";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     // backgroundColor: "#EDEBE0",
//     padding: "25px 25px 25px 25px",
//     borderRadius: "5px",
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
//     backgroundColor: "#D59737",
//   },
//   login: {
//     color: "#605948",
//   },
//   // loginForm: {
//   //   backgroundColor: "#EDEBE0",
//   // },
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
//     <div className={classes.background}>
//       <Typography>
//         <b>BeerMe</b> is a craft beer library and recommendation app.  You can
//         search for beers by style, learn about their flavors, and get to know
//         common beer terms to make you a part of the educated beer drinker elite.
//         Login below to get started. Cheers!
//       </Typography>
//       <Container component="main" maxWidth="xs" className="loginForm">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Login
//           </Typography>
//           <form onSubmit={handleSubmit} className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               type="text"
//               id="userName"
//               label="username"
//               name="userName"
//               autoComplete="userName"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item>
//                 <Link href="/signup" className={classes.form} variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//         <Box mt={8}></Box>
//       </Container>
//     </div>
//   );
// }
