import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers.js'
import createSagaMiddleware from 'redux-saga'
import { watcherSagaUser, watcherSagaImg } from './sagas.js'

let sagaMiddleware = createSagaMiddleware()

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watcherSagaUser)
sagaMiddleware.run(watcherSagaImg)

export default store