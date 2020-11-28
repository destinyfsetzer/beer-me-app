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
import { Link } from "react-router-dom";
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
    marginTop: theme.spacing(3),
    color: "#D59737",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#605948",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    userName: userName,
    password: password,
  };

  const handleTextChange = (evt) => {
    if (evt.target.name === "firstName") {
      setFirstName(evt.target.value);
    }
    if (evt.target.name === "lastName") {
      setLastName(evt.target.value);
    }
    if (evt.target.name === "email") {
      setEmail(evt.target.value);
    }
    if (evt.target.name === "userName") {
      setUserName(evt.target.value);
    }
    if (evt.target.name === "password") {
      setPassword(evt.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      const rawResponse = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          userName: userName,
          password: password,
        }),
      });
      const content = await rawResponse.json();
      console.log("Response", content);
    })();
  };

  let textInput1 = useRef(null);
  let textInput2 = useRef(null);
  let textInput3 = useRef(null);
  let textInput4 = useRef(null);
  let textInput5 = useRef(null);

  return (
    <Container component="main" maxWidth="xs">
      <h2>Good choice!</h2>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleTextChange}
                inputRef={textInput1}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleTextChange}
                inputRef={textInput2}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleTextChange}
                inputRef={textInput3}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
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
                textInput1.current.value = "";
                textInput2.current.value = "";
                textInput3.current.value = "";
                textInput4.current.value = "";
                textInput5.current.value = "";
              }, 100);
            }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" className={classes.form} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
