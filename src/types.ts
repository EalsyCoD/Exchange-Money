export interface State {
    rate: RateState
    filter: WalletRootState
 }
 

 export type RateState = {
    rates: any
 }

export type Currency = {
        currency1: number,
        currency2: number,
        currencyFS: string,
        currencyNX: string
}

export type Wallets = {
        AED: number,
        AFN: number,
        EUR: number,
        USD: number,   
}

export type currency = {
        AED: number,
        AFN: number,
        EUR: number,
        USD: number,

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