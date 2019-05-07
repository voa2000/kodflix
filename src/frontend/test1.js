class PressMe extends React.Component {
	constructor () {
		super();
		this.state = {
			message: 'Button not pressed yet'
		};
	
		getMessage() {
			this.setState({
				message: 'Button already pressed!'
			});
		}
	}
	render() {
		return (
			<div>
				<button onClick={this.getMessage()}>Press me!</button>
				<label>{this.state.message}</label>
			</div>
		);
	}

}