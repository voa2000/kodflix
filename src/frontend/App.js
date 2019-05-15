import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details/Details";
import Notfound from "./Notfound/Notfound";
import { Gallery } from "./Gallery/Gallery";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route exact path="/not-found" component={Notfound} />
              <Route exact path="/:id" component={Details} />
            </Switch>
            {/* console.log(this.state.json); */}
            {/* <p >{Object.values(this.state.movies)}</p> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
