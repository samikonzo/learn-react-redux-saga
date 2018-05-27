import { takeLatest, call, put } from 'redux-saga/effects'
import Constants from './constants.js'
import Actions from './actions.js'

let l = console.log


export function* watcherSaga(){
	yield takeLatest(Constants.USER_GET_DATA, workerSaga)
}

function fetchUserData(id){
	return fetch(`/user/data/${id}`, {method: 'GET'})
		.then(res => {
			if(!res.ok) throw res
			return res.json()
		})
		.catch(error => error.text())
}

function* workerSaga(action){
	try{
		const data = yield call(fetchUserData, action.payload)
		l(data)

		yield put(Actions.userGetDataSuccess(data))

	} catch(error) {
		yield put(Actions.userGetDataFail(error))
	}
}