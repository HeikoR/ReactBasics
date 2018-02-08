import React, { Component } from 'react';

class ButtomSimple extends Component {

	render() {
		return (
			<input type="button" className="button-simple" value={this.props.label} onClick={this.props.onClick} />
		);
	}
}

// export module
export default ButtomSimple;