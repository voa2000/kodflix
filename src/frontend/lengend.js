export class FetchLegend extends React.Component {
  constructor() {
    super();
    this.state = { firstName: "", lastName: "", error: "" };
  }
  componentDidMount() {
    fetch(`/rest/legends/${this.props.id}`)
      .then(res => res.json())
      .then(details => {
        let name = details.name.split(" ");
        this.setState({
          firstName: this.capitalize(name[0]),
          lastName: this.capitalize(name[1])
        });
      })
      .catch(() => this.setState({ error: "Legend not found!" }));
  }
  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  render() {
    let { firstName, lastName, error } = this.state;
    return (
      <>
        <div className="firstName">{firstName}</div>
        <div className="lastName">{lastName}</div>
        <div className="error">{error}</div>
      </>
    );
  }
}


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
           {/* <button onClick={this.fetchFrom3rdParty}>Data from 3rd Party</button> */}
        {/* <button onClick={this.fetchFromServer}>Data from server</button> */}
 
  )
}

  // fetch(`/rest/shows`)
  //   .then(res => res.json())
  //   .then(movies =>
  //     console.log("Movies fetched ...", JSON.stringify(movies))
  //   );
