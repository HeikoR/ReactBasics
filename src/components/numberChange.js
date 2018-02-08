import React, { Component } from 'react';
import ButtonSimple from '../components/buttonSimple';

class NumberChange extends Component {

//	componentDidMount() {
//		this.props.number = 0;
//	}
	constructor	() {
		super();

		this.state = {
			number: 0,
		};
	}

	incrementNumber() {
		//this.props.number = +this.props.number + 1;
		this.setState((prevState, props) => {
			return { number: prevState.number + 1 }
		});
	}
	decrementNumber() {
		//this.props.number = -this.props.number + 1;
		this.setState((prevState, props) => {
			return { number: prevState.number - 1 }
		});
	}

	//The best way to learn: https://reactjs.org/docs/hello-world.html
	render() {
		return (
			<div className="numberChange">
				<p>
				<ButtonSimple
					label="+"
					onClick={e => this.incrementNumber()}
				/>
				<span className="numberChange-text">{this.props.label}{this.state.number}!!</span>
				<ButtonSimple
					label="-"
					onClick={e => this.decrementNumber()}
				/>
				</p>
			</div>
		);
	}
}

// set default values for NumberChange properties
NumberChange.defaultProps = {
	label: "You can do it ",
	number: 0,
};

/* how and when would we use mapStateToProps
const mapStateToProps = (state) => {
    return {
		number: state.number
	}
}*/

/*
const mapDispatchToProps = (dispatch) => {
    return {
		showNumberOnly: () => dispatch(showNumberOnly()),
		showAll: (title) => dispatch(showAll())
	}
}

 */

export default NumberChange;
//export default connect(mapStateToProps, mapDispatchToProps)(NumberChange);