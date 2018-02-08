import React, { Component } from 'react';
import NumberChange from '../components/numberChange';

class App extends Component {

	//Keep the four instances of the numberChange class so that you can
	//see each component manage its own state
	render() {
		return (
			<div>
				<NumberChange
					label=" Number is: "
				/>
				<NumberChange/>
				<NumberChange/>
				<NumberChange/>
			</div>
		);
	}
}

export default App;
