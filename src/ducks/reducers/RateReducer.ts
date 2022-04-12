import { RateState, RateAction } from '../../types' 


const initialState: RateState = {
    rates: {
        AED: 3.994658,
        AFN: 95.707133,
        EUR: 1,
        USD: 1.087583,
    }
}
const rateReducer = (
    state: RateState = initialState,
    action: RateAction
): RateState => {
    switch(action.type){
        case 'SET-RATE':
            return action.payload
            default:
                return state
    }
}
export default rateReducer