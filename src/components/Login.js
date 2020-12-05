import React, { useState, useEffect } from "react";
// import { checkAuth } from "./CheckAuth";
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
  },
  image: {
    backgroundImage:
      "url(https://i.ibb.co/1JHmFs2/beer-icons-background-vector-9715570.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#F7F5EE",

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
  beerHeader: {
    fontSize: "90px",
    color: "#F7F5EE",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "20%",
    textShadow: "2px 5px #605948;",
  },
  overlayText: {
    color: "#F7F5EE",
    fontSize: "25px",
    textAlign: "center",
    padding: "10px",
  },
  titleText: {
    backgroundColor: "#F7B624",
    margin: "0px 10px",
    borderRadius: "5px",
  },
}));

export default function Login() {
  const [users, setUsers] = useState([]);
  // const [redirectHome, setRedirectHome] = React.useState(false);
  const classes = useStyles();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000";
    window.location.replace("/search");
    // props.history.push("/search");
    // setRedirectHome(true);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <Typography className={classes.beerHeader}>BeerMe</Typography>
        <div className={classes.titleText}>
          <Typography className={classes.overlayText}>
            <em style={{ color: "#605948" }}>BeerMe</em> is a craft beer library
            and recommendation app.  You can search for beers by style, learn
            about their flavors, and get to know common beer terms to make you a
            part of the educated beer drinker elite.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
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
