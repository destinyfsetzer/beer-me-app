import axios from "axios";
require("dotenv").config();

//  create an instance of axios
export default axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});
