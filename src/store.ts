import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rateReducer from './ducks/reducers/RateReducer'
import WalletReducer from './ducks/reducers/WalletReducer'


const reducer = combineReducers({
  rate: rateReducer,
  filter: WalletReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store