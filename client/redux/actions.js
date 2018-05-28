import Constants from './constants.js'

let l = console.log

export let userGetData = (id) => {
	return {
		type: Constants.USER_GET_DATA,
		payload: id,
	}
}

export let userGetDataSuccess = (data) => {
	l(data)
	return {
		type: Constants.USER_GET_DATA_SUCCESS,
		payload: data
	}
}

export let userGetDataFail = (error) => {
	return {
		type: Constants.USER_GET_DATA_FAIL,
		payload: error
	}
}

export let imageGet = () => {
	return {
		type: Constants.IMAGE_GET,
	}
}

export let imgGetSuccess = (imgLink) => {
	return {
		type: Constants.IMAGE_GET_SUCCESS,
		payload: imgLink
	}
}
export let imgGetFail = (error) => {
	return {
		type: Constants.IMAGE_GET_FAIL,
		payload: error,
	}
}


let actions = {
	userGetData,
	userGetDataSuccess,
	userGetDataFail,
	imageGet,
	imgGetSuccess,
	imgGetFail,
}

export default actions