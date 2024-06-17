// import TextField from "@mui/material/TextField";
import { TextField } from "@mui/material";
import React from "react";

const CurrencyInput = ({ amount, onAmountChange }: any) => {
  return (
    <>
      <TextField
        id="outlined-number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        style={{ marginBottom: 5 }}
      />
    </>
  );
};

export default CurrencyInput;
