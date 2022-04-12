import React  from 'react'
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { useSelector } from 'react-redux'
import { State } from '../../types'


const Charts = (currency: any): JSX.Element => {

  // const [currency1, setCurrency1] = React.useState('USD')
  // const [currency2, setCurrency2] = React.useState('USD')
    const rates = useSelector((state: State) => state.rate.rates)
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
        EUR: currency.currency2+ 0.1,
        amt: 50
      },
      {
        "name": "Mar",
        USD: currency.currency1- 0.1,
        EUR: currency.currency2- 0.2,
        amt: 50
      },
      {
        "name": "Apr",
        USD: currency.currency1+ 0.05,
        EUR: currency.currency2+ 0.01,
        amt: 50
      },
      {
        "name": "May",
        USD: currency.currency1+ 0.2,
        EUR: currency.currency2,
        amt: 50
      },
      {
        "name": "Jun",
        USD: currency.currency1+ 0.32,
        EUR: currency.currency2+ 0.3,
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