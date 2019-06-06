import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details/Details";
import Notfound from "./Notfound/Notfound";
import { Gallery } from "./Gallery/Gallery";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route exact path="/not-found" component={Notfound} />
              <Route exact path="/:id" component={Details} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
