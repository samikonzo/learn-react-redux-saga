import { takeLatest, call, put } from 'redux-saga/effects'
import Constants from './constants.js'
import Actions from './actions.js'

let l = console.log


export function* watcherSagaUser(){
	yield takeLatest(Constants.USER_GET_DATA, workerSagaUser)
}

export function* watcherSagaImg() {
	yield takeLatest(Constants.IMAGE_GET, workerSagaImg)
}

function fetchUserData(id){
	return fetch(`/user/data/${id}`, {method: 'GET'})
		.then(res => {
			if(!res.ok) throw res
			return res.json()
		})
		.catch(error => error.text())
}

function* workerSagaUser(action){
	try{
		const data = yield call(fetchUserData, action.payload)
		yield put(Actions.userGetDataSuccess(data))

	} catch(error) {
		yield put(Actions.userGetDataFail(error))
	}
}


function fetchImg(){
	return fetch('/img', { method: 'GET' })
		.then(res => {
			if(!res.ok) throw res
			return res.text()
		})
		.catch(error =>  error.text() )
}

function* workerSagaImg(){
	try{
		let imgLink = yield call(fetchImg)
		yield put (Actions.imgGetSuccess(imgLink))
	} catch(e) {
		yield put (Actions.imgGetFail(e))
	}
}