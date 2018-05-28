import { combineReducers } from 'redux'
import reducerUser from './reducers/reducerUser.js'
import reducerImg from './reducers/reducerImg.js'

let rootReducer = combineReducers({
	user: reducerUser,
	img: reducerImg,
})

export default rootReducer