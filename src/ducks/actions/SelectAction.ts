import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { State } from '../../types'


const setSelect = (
    wallet: string
  ): ThunkAction<void, State, unknown, AnyAction> => {
    return async (dispatch, getState) => {
  
      dispatch({
        type: 'SET-WALLET-FILTER',
        payload: {
          wallet,
        },
      })
    }
  }


  export { setSelect }