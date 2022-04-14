import React  from 'react'
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { TodayChange, Text } from './styles'
import { Currency } from '../../types'

interface Props {
  currency1: number,
  currency2: number,
  currencyFS: string,
  currencyNX: string
}


const Charts = (currency: Props): JSX.Element => {

    const data = [
      {
        "name": "Jan",
        USD: currency.currency1 + 0.2,
        EUR: currency.currency2 + 0.1,
        amt: 50,
      },
      {
        "name": "Feb",
        USD: currency.currency1 + 0.3,
        EUR: currency.currency2 + 0.1,
        amt: 50
      },
      {
        "name": "Mar",
        USD: currency.currency1 - 0.1,
        EUR: currency.currency2 - 0.2,
        amt: 50
      },
      {
        "name": "Apr",
        USD: currency.currency1 + 0.05,
        EUR: currency.currency2 + 0.01,
        amt: 50
      },
      {
        "name": "May",
        USD: currency.currency1 + 0.2,
        EUR: currency.currency2,
        amt: 50
      },
      {
        "name": "Jun",
        USD: currency.currency1 + 0.32,
        EUR: currency.currency2 + 0.3,
        amt: 40
      },
      {
        "name": "Jul",
        USD: currency.currency1 - 0.1,
        EUR: currency.currency2 - 0.12,
        amt: 50
      }
    ]
    return(
        <React.Fragment>
            <div style={{width: 850, margin: 'auto'}}>
            <div style={{width: 300, height: 5, float: 'right'}}>
            <TodayChange>Today's change <br />
            <Text>{ currency.currency2 / currency.currency1 }
            <img src={ currency.currency2 / currency.currency1 > 0 ? 'images/icon-up.svg' : 'images/icon-down.svg'} alt='icon' />
            </Text>
             </TodayChange>
            </div>
        <LineChart width={730} height={250} data={data}
        margin={{ top: 10, right: 0, left: 20, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={currency.currencyFS} stroke="#8884d8" />
        <Line type="monotone" dataKey={currency.currencyNX} stroke="#82ca9d" />
      </LineChart> 
      </div>
        </React.Fragment>
    )
}


export default Charts;