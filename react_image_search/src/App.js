import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <div>
            <h1>Welcome to Shannon's PixaBay API Project</h1>
            <h2>Choose amount of images from drop-down menu.</h2>
            <h3>Search for images by category and press enter.</h3>
            <h4>All images can be downloaded from: <a href="https://pixabay.com/" target="_blank">PixaBay</a></h4>
          </div>
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
