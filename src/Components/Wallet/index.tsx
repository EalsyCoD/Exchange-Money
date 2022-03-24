import React  from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux'
import { State } from '../../types'



const Wallet = (): JSX.Element => {
  const rates = useSelector((state: State) => state.rate.rates)

  return (
    <Box sx={{display: 'flex', marginLeft: 80, maxWidth: 600}}>
        <InputLabel sx={{width: 100,marginTop: -4}}>From</InputLabel>
      <FormControl
           sx={{marginTop: -1.5, marginLeft: -5.5}} fullWidth>
          <Select native 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
            >
            {/* {Object.keys(rate).map((value, index) => <option key={index} value={rate[value]}>{value}</option>)} */}
            {Array.isArray(rates) && rates.length &&  rates.map((el, i) => (
              <option value={el} key={i}>{el}</option>
            ))}
        </Select>
        <TextField
        variant="filled"  
        sx={{marginTop: 10, width: 286}}>
        </TextField>
      </FormControl>
      <InputLabel sx={{width: 100, marginTop: -4, marginLeft: 3}}>To</InputLabel>
      <FormControl
        sx={{marginTop: -1.5,marginLeft: -6}} fullWidth >
        <Select native   
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
         {/* {Object.keys(rate).map((value, index) => <option key={index} value={rate[value]}>{value}</option>)} */}
         {Array.isArray(rates) && rates.length && rates.map((el, i) => (
              <option value={el} key={i}>{el}</option>
            ))}
        </Select>
        <TextField 
        variant="filled"
        sx={{marginTop: 10, width: 286}}>
        </TextField>
      </FormControl>
    </Box>
  );
}

export default Wallet