import React, { useState, useRef } from "react";
import {
  Avatar,
  makeStyles,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
    color: "#D59737",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#D59737",
  },
  quote: {
    fontSize: "18px",
    letterSpacing: "2px",
    textAlign: "center",
    paddingTop: "10%",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [redirectSearch, setRedirectSearch] = useState(null);

  const handleTextChange = (evt) => {
    if (evt.target.name === "userName") {
      setUserName(evt.target.value);
    }
    if (evt.target.name === "password") {
      setPassword(evt.target.value);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const rawResponse = await fetch("/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });
    const content = await rawResponse.text();
    console.log("Response", content);
    setRedirectSearch(true);
  };

  let textInput4 = useRef(null);
  let textInput5 = useRef(null);

  if (redirectSearch) {
    return <Redirect to="/search" />;
  }
  return (
    <div>
      <Typography className={classes.quote}>
        “Beer is proof that God loves us and wants us to be happy."
        <br />
        -Benjamin Franklin
      </Typography>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography style={{ color: "#605948" }} component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={handleTextChange}
                  inputRef={textInput4}
                  variant="outlined"
                  required
                  fullWidth
                  name="userName"
                  label="Username"
                  type="text"
                  id="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleTextChange}
                  inputRef={textInput5}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                setTimeout(() => {
                  textInput4.current.value = "";
                  textInput5.current.value = "";
                }, 100);
              }}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/" className={classes.form} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
