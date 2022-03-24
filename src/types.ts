export interface State {
   rate: RateState 
}


export type RateState ={
    rates: Array<string>
}

export type RateAction = {
    type: string
    payload: RateState
}

export type DispatchRateType = (args: RateAction) => RateAction