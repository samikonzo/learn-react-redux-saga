import Constants from '../constants.js'

let imgInit = {
	img: undefined,
	loading: false,
	error: false,
}


let reducerImg = (state = imgInit, action) => {
	let { type, payload } = action

	switch(type){
		case Constants.IMAGE_GET : {
			return {
				...state, 
				loading: true
			}
		};

		case Constants.IMAGE_GET_SUCCESS : {
			return {
				...state,
				loading: false,
				error: false,
				img: payload,
			}
		};

		case Constants.IMAGE_GET_FAIL : {
			return {
				...state,
				loading: false,
				error: payload,
				img: undefined,
			}
		};


		default: return state
	}
}

export default reducerImg