import Constants from '../constants.js'

let initUser = {
	id: 'id_1',
	name: undefined,
	surname: undefined,
	age: undefined,
	loading: false,
	error: undefined,
}

let reducerUser = (state = initUser, action) => {
	let { type, payload } = action

	switch(type){
		case Constants.USER_GET_DATA : {
			return {
				...state,
				loading: true
			}
		};

		case Constants.USER_GET_DATA_SUCCESS : {
			let { name, surname, age } = payload 

			return {
				...state,
				loading: false,
				name, surname, age
			}
		};

		case Constants.USER_GET_DATA_FAIL : {
			return {
				...state,
				loading: false,
				error: payload
			}
		};

		default: return state
	}
}

export default reducerUser