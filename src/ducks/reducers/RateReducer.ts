
import { RateState, RateAction } from '../../types' 



const initialState: RateState = {
    rates: {}
    
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