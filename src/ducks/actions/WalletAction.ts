import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { DispatchWalletType, RootState } from '../../types'

const setWallet = (
  rates: any
  ): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch: DispatchWalletType, getState) => {
      dispatch({
        type: 'SET-WALLET',
        payload: {
          wallet: getState().filter.wallet,
          rates,
        },
      })
    }
  }


export { setWallet }