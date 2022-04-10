import { RateState, RateAction } from '../../types' 



const initialState: RateState = {
    items: []
    
}
const rateReducer = (
    state: RateState = initialState,
    action: RateAction
): RateState => {
    switch(action.type){
        case 'SET-RATE':
            return {
                items: action.payload.items,
            }
            default:
                return state
    }
}


export default rateReducer