import {createStore} from 'redux'
import counterReducer from './services/counterReduces'

const store = createStore(counterReducer)

export default store;