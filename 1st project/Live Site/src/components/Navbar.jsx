import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Navbar = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#FFFFFF",
        paddingLeft: "20px",
        paddingRight: "20px",
        justifyContent: "space-between",
      }}
      direction={"row"}
    >
      <Typography sx={{ padding: "26px" }}>
        <img src="src/assets/lifesight-logo.svg" width={98} height={28} />
      </Typography>
      <Stack direction={"row"} gap={4} padding={"28px"}>
        <Stack direction={"row"}>
          <Typography>Products</Typography>
          <KeyboardArrowDownIcon />
        </Stack>
        <Stack direction={"row"}>
          <Typography>Solutions</Typography>
          <KeyboardArrowDownIcon />
        </Stack>
        <Stack direction={"row"}>
          <Typography>Resources</Typography>
          <KeyboardArrowDownIcon />
        </Stack>
        <Typography>Platform Tour</Typography>
        <Typography>Pricing</Typography>
      </Stack>
      <Stack padding={"21px"}>
        <Button
          sx={{
            border: "2px solid #6938EF",
            borderRadius: "26px",
            fontSize: "16px",
            padding: "7px 36px",
            fontWeight: "600",
            color: "#6938EF",
          }}
          className="btn"
        >
          Log in
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
