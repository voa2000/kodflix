import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Details from './Details';
import Notfound from './Notfound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={Notfound} />
            <Route exact path='/:movieId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
