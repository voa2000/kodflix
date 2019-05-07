import React, { Component } from 'react';
import us from './images/us.jpg';
import highway from './images/thehighwaymen.jpg';
import getout from './images/getout.jpg';
import luther from './images/luther.jpg';
import men from './images/whatmenwant.jpg';
import shazam from './images/shazam.jpg';

class getMovies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        fetch('/rest/shows')
            .then(res => res.json())
            .then(movies => 
              this.setState({movies}, () => 
              console.log('Movies fetched ...', movies)));

    }
  render() {
    return (
      <div>
      <h1>Mavel Movies</h1>
        <ul>
            {this.state.movies.map(({ id, title, year}) => 
                <li key={id}>{ title } { year } </li>
                )}
        </ul>
      </div>
    )
  }
}

export default getMovies
render() { 
    return [
      {id:'us', title:"Us", logo: us, synoposis: 
      "Accompanied by her husband, son and daughter, Adelaide Wilson returns to the beachfront home where she grew up as a child."},
      {id:'highwaymen',title:"The Highwaymen", logo: highway, synoposis: 
      "A pair of Texas Rangers come out of retirement to catch the infamous outlaws Bonnie and Clyde."},
      {id:'getout',title:"Get Out", logo:getout, synoposis: 
        "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."},
      {id:'luther',title:"Luther" ,logo:luther, synoposis:
        "John Luther is a Detective Chief Inspector (DCI) working for the Serious Crime Unit in series one, and the new \"Serious and Serial\" unit from series 2. A dedicated police officer, Luther is obsessive, possessed, and sometimes violent."},
      {id:'whatmenwant',title:"What Men Want", logo:men, 
      synoposis: "A loose remake to the 2000 film What Women Want, the plot follows a woman who, after drinking a potent concoction given by a shaman, gains the ability to hear men's inner thoughts."},
      {id:'shazam',title:"Shazam" ,logo:shazam, synoposis: 
      "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word - SHAZAM. - this streetwise fourteen-year-old foster kid can turn into the grown-up superhero Shazam."}
    ];
  }
}
export default getMovies;