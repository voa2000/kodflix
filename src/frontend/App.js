import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Details from './Details';
import Notfound from './Notfound';

class App extends Component {
  constructor() {
    super(); 
      this.state = { 
                    movies: ' No data fetched',
                    json: {server: 'I have not received third party data' }}
    }
  
fetchFromServer = async () => {
  let result = await fetch('/rest/shows');
  this.setState({movies: await result.json()});
}
fetchFrom3rdParty = async () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then (res => res.json())
    .then (json => this.setState({json}))
}

  render() {
    return (
      <div>
      {/* <button onClick={this.fetchFrom3rdParty}>Data from 3rd Party</button> */}
        {/* <button onClick={this.fetchFromServer}>Data from server</button> */}
      <Router>
        <div className="App">

          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={Notfound} />
            <Route exact path='/:movieId' component={Details} />
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
