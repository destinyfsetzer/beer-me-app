import React, { useState, useEffect } from "react";
// import { checkAuth } from "./CheckAuth"
import {
  Avatar,
  makeStyles,
  Container,
  Typography,
  Box,
  Grid,
  Link,
  TextField,
  CssBaseline,
  Button,
} from "@material-ui/core/";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#D59737",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "#D59737",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#605948",
  },
  login: {
    color: "#605948",
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
    const response = await fetch("users");
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

  // if (redirectHome) {
  //   return <Redirect to="/search" />;
  // }
  return (
    <Container component="main" maxWidth="xs" className="login-form">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.login} component="h1" variant="h5">
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
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
