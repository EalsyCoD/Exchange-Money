export interface RootState {
   rate: RateState 
   filter: WalletRootState
}

export type IRate = {
    base: string,
    rates: {
        AED: number,
        AFN: number,
        AMD: number,
        AWG: number,
    }
}

export type DispatchWalletType = (args: WalletAction) => WalletAction


export type WalletAction = {
    type: string,
    payload: WalletRootState
}

export type WalletRootState = {
wallet: Array<string>,
rates: Array<number>
}

export type Rates = {
    AED: number,
    AFN: number,
    AMD: number,
    AWG: number,
}

export type RateState = {
    items: IRate[]
}

export type RateAction = {
    type: string
    payload: RateState
}


export type DispatchRateType = (args: RateAction) => RateAction