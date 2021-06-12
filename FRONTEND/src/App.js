import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rooms from "./components/Rooms/Rooms.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Home from "./components/Home/Home.jsx";
import AddRoom from "./components/Rooms/AddRooms.jsx";
import AddCategory from "./components/Categories/AddCategory.jsx";
import UpdateCategory from "./components/Categories/UpdateCategory.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: null,
    }
    this.addRoomToCategory = this.addRoomToCategory.bind(this);
  }

  addRoomToCategory(catID) {
    this.setState({
      categoryID: catID
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <br />
          <section style={{ padding: "20px" }}>
            <Switch>
              <Route exact path="/">
                <Home passCatID={this.addRoomToCategory} />
              </Route>
              <Route path="/rooms">
                <Rooms />
              </Route>
              <Route path="/add-room">
                <AddRoom />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/add-category">
                <AddCategory />
              </Route>
              <Route path="/update-category">
                <UpdateCategory getCategoryID={this.state.categoryID} />
              </Route>
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
