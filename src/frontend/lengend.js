export class FetchLegend extends React.Component {
  constructor() {
    super();
    this.state = { firstName: "", lastName: "", error: "" };
  }
  comnponentDidMount() {
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
