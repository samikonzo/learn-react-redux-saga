import React, { Component } from 'react';
import { connect } from 'react-redux'
import Actions from '../redux/actions.js'

let l = console.log

class User extends Component {
	state = {}

	onClickHandler(){
		let { id, loading, userGetData } = this.props
		if(loading) return

		l('userGetData!')
		userGetData(id)	
	}

	render() {
		l(this.props)

		let { name, surname, age, loading, id, userGetData } = this.props

		return (
			<div>
				User
				<button onClick={() => { this.onClickHandler()}}> user get data </button>

				{loading ? <i>loading...</i> : (
					<div>
						<h5>name:  {name} </h5>
						<h5>surname:  {surname} </h5>
						<h5>age:  {age} </h5>
					</div>
				)}

			</div>
		);
	}
}


let mapStateToProps = (state) => {
	return {
		...state.user
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		userGetData: (id) => { dispatch(Actions.userGetData(id)) }
	}
}

let connectedUser = connect(mapStateToProps, mapDispatchToProps)(User)

export default connectedUser