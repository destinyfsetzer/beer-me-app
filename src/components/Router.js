import React from "react";
import Router from "./Router";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
