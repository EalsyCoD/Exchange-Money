export interface State {
    rate: RateState 
    filter: WalletRootState
    currency: CurrencyRootState
 }
 
 
 export type RateState ={
     rates: any
 
 }


 
 export type RateAction = {
     type: string
     payload: RateState
 }
 
 
 export type WalletRootState  = {
     wallet: any
 }
 export type CurrencyRootState  = {
     currency: any
 }
 export type CurrencyAction  = {
    type: string
    payload: CurrencyRootState
 }
 
 export type SelectAction = {
     type: string,
     payload: WalletRootState
 }
 
 export type DispatchRateType = (args: RateAction) => RateAction