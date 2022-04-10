import { WalletRootState, WalletAction } from '../../types'


const initialState: WalletRootState = {
    wallet: ['USD', 'EUR', 'AOA'],
    rates: [1.087583, 1 , 77.106204]
}


  const WalletReducer = (
    state: WalletRootState = initialState,
    action: WalletAction
  ): WalletRootState => {
    switch (action.type) {
      case 'SET-WALLET':
        return {
          ...state,
          wallet: action.payload.wallet,
          rates: action.payload.rates,
        }
      default:
        return state
    }
  }
  
  export default WalletReducer