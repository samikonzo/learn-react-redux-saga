import React, {Component} from 'react'
import { connect } from 'react-redux'
import Actions from '../redux/actions.js'

let l = console.log

class Img extends Component{
	state = {}
	
	onClickHandler(){
		let { loading, imageGet } = this.props
		if(loading) return
		imageGet()
	}

	render(){

		let { img, loading } = this.props


		return (
			<div className="Img">
				{ loading ? 'loading...' : <button onClick={() => {
					this.onClickHandler()
				}}> get random img </button>}
				{ img && <img src={img}/> }
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return{
		...state.img
	}
}

let mapDispatchToProps = (dispatch) => {
	return{
		imageGet: () => { dispatch(Actions.imageGet)}
	}
}

let ImgConnected = connect(mapStateToProps, mapDispatchToProps)(Img)

export default ImgConnected 