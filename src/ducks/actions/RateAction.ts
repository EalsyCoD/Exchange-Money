import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { State } from '../../types'

import { apikey } from '../../config'




const baseUrl: string = `http://data.fixer.io/api/latest?access_key=${apikey}`



const setRate = (
    rates: []
): ThunkAction<void, State, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            const res = await axios.get(
                `${baseUrl}${
                    rates === null
                }`
            )
            dispatch({
                type: 'SET-RATE',
                payload: res.data
            })
        } catch(err:any){
            
        }
    }
}

export { setRate }