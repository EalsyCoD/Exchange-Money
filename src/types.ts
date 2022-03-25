export interface State {
   rate: RateState 
   filter: WalletRootState
}


export type RateState ={
    rates: any
    
}

export type RateAction = {
    type: string
    payload: RateState
}


export type WalletRootState  = {
    wallet: string
}

export type SelectAction = {
    type: string,
    payload: WalletRootState
}

export type DispatchRateType = (args: RateAction) => RateAction