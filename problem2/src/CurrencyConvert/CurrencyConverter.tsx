import React, { useState, useEffect } from "react";
import CurrencyInput from "./CurrencyInput";
import CurrencySelector from "./CurrencySelector";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import TextField from "@mui/material/TextField";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);

  useEffect(() => {
    fetch(`https://interview.switcheo.com/prices.json`)
      .then((response) => response.json())
      .then((data) => {
        let priceFrom = 1;
        let priceTo = 1;
        let currenciesArr = data?.map((element: any) => {
          if (element.currency === fromCurrency) priceFrom = element.price;
          if (element.currency === toCurrency) priceTo = element.price;
          return element.currency;
        });
        setCurrencies(currenciesArr);
        if (fromCurrency === "") {
          setFromCurrency(currenciesArr[0]);
        }
        if (toCurrency === "") {
          setToCurrency(currenciesArr[0]);
        }
        setExchangeRate(priceTo / priceFrom);
      });
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setConvertedAmount(amount * exchangeRate);
  }, [amount, exchangeRate]);

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencySelector
        currency={fromCurrency}
        onCurrencyChange={setFromCurrency}
        currencies={currencies}
      />
      <CurrencyInput amount={amount} onAmountChange={setAmount} />
      <br />
      <span>
        {" "}
        <SwapVerticalCircleIcon />{" "}
      </span>
      <br />
      <CurrencySelector
        currency={toCurrency}
        onCurrencyChange={setToCurrency}
        currencies={currencies}
      />
      <TextField
        id="outlined-number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        disabled
        value={convertedAmount.toFixed(2)}
        style={{ marginBottom: 5 }}
      />
      <br />
      <h2>
        Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
      </h2>
    </div>
  );
};

export default CurrencyConverter;
