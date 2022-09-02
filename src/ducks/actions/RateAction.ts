import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { RateState, State, Wallets } from '../../types'
import { apikey } from '../../config'

const baseUrl: string = `http://data.fixer.io/api/latest?access_key=${apikey}`


const setRate = (
): ThunkAction<void, State, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            const res = await axios.get<RateState>(
                `${baseUrl}`
            )
            dispatch({
                type: 'SET-RATE',
                payload: res.data
            })
        } catch (err) {

        }
    }
}
export { setRate }