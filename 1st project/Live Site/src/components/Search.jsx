import React from "react";
import { Stack, Button } from "@mui/material";

const Search = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          borderRadius: "38px",
          backgroundColor: "white",
          color: "black",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            px: 1.5,
            py: 2,
            color: "black",
            justifyContent: "center",
          }}
        >
          <input
            placeholder="Enter your work email"
            style={{ fontSize: "16px", outline: "none", border: "none" }}
          />
        </Stack>

        <Button
          endIcon={<img src="src/assets/button-icon.png" />}
          sx={{
            textTransform: "none",
            backgroundColor: "#141414",
            color: "white",
            px: 2,
            py: 1.5,
            borderRadius: "67px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Request Demo
        </Button>
      </Stack>
    </>
  );
};

export default Search;
