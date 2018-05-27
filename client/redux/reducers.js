import { combineReducers } from 'redux'
import reducerUser from './reducers/reducerUser.js'


let rootReducer = combineReducers({
	user: reducerUser,
})

export default rootReducer