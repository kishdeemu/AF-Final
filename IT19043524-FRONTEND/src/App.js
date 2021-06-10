import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rooms from "./components/Rooms/Rooms.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Home from "./components/Home/Home.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <br />
        <section style={{padding: "20px"}}>
          <Switch>
          <Route exact path="/">
            <Home/>
            </Route>
            <Route path="/rooms">
              <Rooms/>
            </Route>
            <Route path="/categories">
              <Categories/>
            </Route>
          </Switch>
        </section>
      </div>
      </Router>
    );
  }
}

export default App;
