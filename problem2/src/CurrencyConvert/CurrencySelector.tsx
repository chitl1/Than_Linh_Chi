import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";

const CurrencySelector = ({ currency, onCurrencyChange, currencies }: any) => {
  //   const currencies = ["USD", "EUR", "GBP", "JPY", "AUD"];

  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        style={{
          width: 130,
        }}
      >
        {" "}
        {currencies?.map((currency: string) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default CurrencySelector;
