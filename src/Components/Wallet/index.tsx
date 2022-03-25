import React  from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../types'
import { setSelect } from '../../ducks/actions/SelectAction'


const Wallet = (): JSX.Element => {
  const dispatch = useDispatch()
  const rates = useSelector((state: State) => state.rate.rates)
  const wallet = useSelector((state: State) => state.filter.wallet)
  console.log(rates)
  return (
    <Box sx={{display: 'flex', marginLeft: 80, maxWidth: 600}}>
        <InputLabel sx={{width: 100,marginTop: -4}}>From</InputLabel>
      <FormControl
           sx={{marginTop: -1.5, marginLeft: -5.5}} fullWidth>
          <Select native 
          defaultValue={wallet}
          onChange={(e) => {
            dispatch(setSelect(e.target.value))
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
            >
            {Object.keys(rates).map((value:any, i:any) => <option key={i} value={rates[value]}>{value}</option>)}
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
          defaultValue={wallet}
          onChange={(e) => {
            dispatch(setSelect(e.target.value))
          }}
        >
         {Object.keys(rates).map((value:any, i:any) => <option key={i} value={rates[value]}>{value}</option>)}
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