import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rateReducer from './ducks/reducers/RateReducer'

const reducer = combineReducers({
  rate: rateReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store