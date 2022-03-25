import { WalletRootState, SelectAction } from '../../types'

const initialState: WalletRootState = {
  wallet: 'USD',
}

const FilterReducer = (
  state: WalletRootState = initialState,
  action: SelectAction
): WalletRootState => {
  switch (action.type) {
    case 'SET-WALLET-FILTER':
      return {
        ...state,
        wallet: action.payload.wallet
      }
      default:
          return state
      
    }
}

export default FilterReducer