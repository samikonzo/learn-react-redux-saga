import React, { Component } from 'react';
import User from '../containers/User.jsx'
import Img from '../containers/Img.jsx'


class App extends Component {
	render() {
		return (
			<div>
				<User />
				<Img />
			</div>
		);
	}
}

export default App