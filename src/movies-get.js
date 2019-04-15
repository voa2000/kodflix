import us from './images/us.jpg';
import highway from './images/thehighwaymen.jpg';
import getout from './images/getout.jpg';
import luther from './images/luther.jpg';
import men from './images/whatmenwant.jpg';
import shazam from './images/shazam.jpg';
//Data seperated from main app
export default function getMovies(){
    return [
      {id:'us', name:"Us", logo: us, movieDetails: 
      "Accompanied by her husband, son and daughter, Adelaide Wilson returns to the beachfront home where she grew up as a child."},
      {id:'highwaymen',name:"The Highwaymen", logo: highway, movieDetails: 
      "A pair of Texas Rangers come out of retirement to catch the infamous outlaws Bonnie and Clyde."},
      {id:'getout',name:"Get Out", logo:getout, movieDetails: 
        "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."},
      {id:'luther',name:"Luther" ,logo:luther, movieDetails:
        "John Luther is a Detective Chief Inspector (DCI) working for the Serious Crime Unit in series one, and the new \"Serious and Serial\" unit from series 2. A dedicated police officer, Luther is obsessive, possessed, and sometimes violent."},
      {id:'whatmenwant',name:"What Men Want", logo:men, 
      movieDetails: "A loose remake to the 2000 film What Women Want, the plot follows a woman who, after drinking a potent concoction given by a shaman, gains the ability to hear men's inner thoughts."},
      {id:'shazam',name:"Shazam" ,logo:shazam, movieDetails: 
      "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word - SHAZAM. - this streetwise fourteen-year-old foster kid can turn into the grown-up superhero Shazam."}
    ];
  }