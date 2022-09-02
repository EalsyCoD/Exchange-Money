import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { ERates, State } from "../../types";

import { Rate } from "./styles";

import Charts from "../Сharts/Charts";
import { Button } from "@mui/material";

const Wallet = (): JSX.Element => {
  const [amount1, setAmount1] = React.useState(1);
  const [amount2, setAmount2] = React.useState(1);
  const [currency1, setCurrency1] = React.useState<ERates>(ERates.USD);
  const [currency2, setCurrency2] = React.useState<ERates>(ERates.EUR);

  const rates = useSelector((state: State) => state.rate.rates);

  function handleAmount1Change(amount1: number) {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setAmount1(amount1);
  }
  function handleCurrency1Change(currency1: ERates) {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setCurrency1(currency1);
  }
  function handleAmount2Change(amount2: number) {
    setAmount1((amount2 * rates[currency1]) / rates[currency2]);
    setAmount2(amount2);
  }
  function handleCurrency2Change(currency2: ERates) {
    setAmount1((amount2 * rates[currency1]) / rates[currency2]);
    setCurrency2(currency2);
  }
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", marginLeft: 80, maxWidth: 600 }}>
        <InputLabel sx={{ width: 100, marginTop: -4 }}>From</InputLabel>
        <FormControl sx={{ marginTop: -1.5, marginLeft: -5.5 }} fullWidth>
          <Select
            native
            defaultValue={currency1}
            onChange={(e) => handleCurrency1Change(e.target.value as ERates)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            {Object.keys(rates).map((value, i) => (
              <option key={i} value={value}>
                {value}
              </option>
            ))}
          </Select>
          <TextField
            onChange={(e) =>
              handleAmount1Change(e.target.value as unknown as number)
            }
            value={amount1}
            variant="filled"
            sx={{ marginTop: 10, width: 286 }}
          ></TextField>
          <Button sx={{ marginTop: 1 }} variant="contained">
            Swap Wallets
          </Button>
        </FormControl>
        <InputLabel sx={{ width: 100, marginTop: -4, marginLeft: 3 }}>
          To
        </InputLabel>
        <FormControl sx={{ marginTop: -1.5, marginLeft: -6 }} fullWidth>
          <Select
            native
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={currency2}
            onChange={(e) => handleCurrency2Change(e.target.value as ERates)}
          >
            {Object.keys(rates).map((value, i) => (
              <option key={i} value={value}>
                {value}
              </option>
            ))}
          </Select>
          <TextField
            onChange={(e) =>
              handleAmount2Change(e.target.value as unknown as number)
            }
            value={amount2}
            variant="filled"
            sx={{ marginTop: 10, width: 286 }}
          ></TextField>
          <div style={{ display: "flex" }}>
            <Rate>
              Current rate <br />
              {rates[currency1]}
            </Rate>
          </div>
        </FormControl>
      </Box>
      <Charts
        currency1={rates[currency1]}
        currency2={rates[currency2]}
        currencyFS={currency1}
        currencyNX={currency2}
      />
    </React.Fragment>
  );
};
export default Wallet;
