require("dotenv").config();
const express = require("express");
const cors = require("cors");
const config = require("config");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
// const morgan = require("morgan");
const authRouter = require("./routers/auth");
const { logger } = require("./middleware");
const app = express();
const port = process.env.PORT || 3001;
// Routes
const categories = require("./routers/categories");
const random = require("./routers/random");
const search = require("./routers/search");
const beers = require("./routers/beers");
app.use(cors());

app.use(express.static("build"));

app.use(bodyParser.json());
app.use(logger);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/api/categories", categories);
app.use("/api/random", random);
app.use("/api/search", search);
app.use("/api/beers", beers);

// // Environment Debugger
// if (app.get("env") === "development") {
//   app.use(morgan("dev"));
//   port = 4001;
// } else if (app.get("env") === "production") {
//   port = process.env.PORT;
// }

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/api", function (req, res, next) {
  var allowedOrigins = [
    "https://beer-me-tx.herokuapp.com/",
    "http://localhost:3000",
  ];
  var origin = req.headers.origin;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  if (allowedOrigins.indexOf(origin) > -1) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  console.log(origin);

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(logger);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our server DESTINY!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Application Key: " + config.get("key"));
console.log("Application Env: " + app.get("env"));
