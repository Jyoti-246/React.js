import {
  Box,
  Stack,
  TextField,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { countryList } from "./contory";
import SwapHorizTwoToneIcon from "@mui/icons-material/SwapHorizTwoTone";

const [amount, setAmount] = useState(0);
console.log("loki90"+setAmount);

const Convertor = () => {
  const countryArray = Object.entries(countryList).map(
    ([currency, country]) => ({
      currency,
      country,
    })
  );

  return (
    <div> 
      <Box
        sx={{
          border: "2px solid black",
          height: "450px",
          width: "400px",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Typography fontSize={"28px"} sx={{ fontWeight: "bold" }}>
          Currency Converter
        </Typography>
        <Typography mt={"20px"}  onChange={(e) => setAmount(e.target.value)}>Enter Ammount</Typography>
        <TextField id="outlined-basic" variant="outlined" />
        <Stack direction={"row"} justifyContent={"space-between"} mt={"24px"}>
          <Stack>
            <Typography fontSize={"14px"}>From</Typography>
            <Autocomplete
              disablePortal
              options={countryArray}
              getOptionLabel={(option) => option.currency}
              sx={{ p: 0, minHeight: 0, width: 150 }}
              renderInput={(params) => {
                const selectedOption = params.inputProps.value
                  ? countryArray.find(
                      (item) => item.currency === params.inputProps.value
                    )
                  : null;

                return (
                  <TextField
                    {...params}
                    label="Select Currency"
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: selectedOption ? (
                        <img
                          src={`https://flagsapi.com/${selectedOption.country}/flat/64.png`}
                          alt={`${selectedOption.country} flag`}
                          style={{ width: 24, height: 16, marginRight: 8 }}
                        />
                      ) : null,
                    }}
                  />
                );
              }}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  {...props}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <img
                    src={`https://flagsapi.com/${option.country}/flat/64.png`}
                    alt={`${option.country} flag`}
                    style={{ width: 24, height: 16 }}
                  />
                  <Typography>{`${option.currency} (${option.country})`}</Typography>
                </Box>
              )}
              isOptionEqualToValue={(option, value) =>
                option.currency === value.currency &&
                option.country === value.country
              }
            />
          </Stack>
          <SwapHorizTwoToneIcon
            sx={{ mt: "30px", fontSize: "46px" }}
          ></SwapHorizTwoToneIcon>
          <Stack>
            <Typography fontSize={"14px"}>To</Typography>
            <Autocomplete
              disablePortal
              options={countryArray}
              sx={{ width: 150 }}
              renderInput={(params) => (
                <TextField {...params} label="Country" />
              )}
            />
          </Stack>
        </Stack>

        <Typography mt={"40px"}>1USD = 80INR</Typography>
        <Button
          variant="contained"
          sx={{ width: "300px", mt: "30px", height: "40px", ml:"30px"}}
        >
          Contained
        </Button>
      </Box>
    </div>
  );
};

export default Convertor;
