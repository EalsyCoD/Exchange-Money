import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { RootState, RateState, IRate } from '../../types'

import { apikey } from '../../config'




const baseUrl: string = `http://data.fixer.io/api/latest?access_key=${apikey}`


const setRate = (
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
      try {
          const { data } = (await axios.get(
              `${baseUrl}`
          )) as { data: RateState}

          const newRate: RateState = {
              ...data,
              items: data.items.map((item: IRate) => ({
                  base: item.base,
                  rates: {
                      AED: item.rates.AED,
                      AFN: item.rates.AFN,
                      AMD: item.rates.AMD,
                      AWG: item.rates.AWG,
                  }
              }))
          } 
          dispatch({
            type: 'NEW-RATE',
            payload: newRate
        }) 
        }catch(err){}
    }
}

export { setRate }