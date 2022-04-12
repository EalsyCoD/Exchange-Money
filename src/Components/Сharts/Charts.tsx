import React  from 'react'
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { useSelector } from 'react-redux'
import { State } from '../../types'


const Charts = (): JSX.Element => {
  const [currency1] = React.useState('USD')
  const [currency2] = React.useState('USD')
    const rates = useSelector((state: State) => state.rate.rates)
    const data = [
      {
        "name": "Jan",
        'USD': rates[currency1] + 0.2,
        'EUR': rates[currency2] + 0.1,
        "amt": 50,
      },
      {
        "name": "Feb",
        "EUR": rates[currency1]+ 0.3,
        "USD": rates[currency2]+ 0.1,
        "amt": 50
      },
      {
        "name": "Mar",
        "EUR": rates[currency1]- 0.1,
        "USD": rates[currency2]- 0.2,
        "amt": 50
      },
      {
        "name": "Apr",
        "EUR": rates[currency1]+ 0.05,
        "USD": rates[currency2]+ 0.01,
        "amt": 50
      },
      {
        "name": "May",
        "EUR": rates[currency1]+ 0.2,
        "USD": rates[currency2],
        "amt": 50
      },
      {
        "name": "Jun",
        "EUR": rates[currency1]+ 0.4,
        "USD": rates[currency2]+ 0.3,
        "amt": 40
      },
      {
        "name": "Jul",
        "EUR": rates[currency1],
        "USD": rates[currency2],
        "amt": 50
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
        <Line type="monotone" dataKey='USD' stroke="#8884d8" />
        <Line type="monotone" dataKey="EUR" stroke="#82ca9d" />
      </LineChart> 
      </div>
        </React.Fragment>
    )
}


export default Charts;