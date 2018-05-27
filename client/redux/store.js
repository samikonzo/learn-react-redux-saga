import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers.js'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas.js'

let sagaMiddleware = createSagaMiddleware()

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watcherSaga)

export default store