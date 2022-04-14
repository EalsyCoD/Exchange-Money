import { RateState, RateAction } from '../../types' 


const initialState: RateState = {
    rates: {
        AED: 3.997056,
        AFN: 95.728118,
        EUR: 1,
        USD: 1.088234
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