import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import FirstPage from "./FirstPage";
import Navbar from "./Navbar";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <Box backgroundColor="#6938EF" sx={{ height: "949px" }}>
        <Navbar />
        <Stack
          direction={"row"}
          sx={{
            color: "white",
            marginTop: "85px",
            marginLeft: "96px",
            marginRight: "96px",
            gap: "32px",
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "48px",
                fontFamily: "kufam",
                fontWeight: "700",
              }}
            >
              The Future of Marketing Measurement Is Here
            </Typography>
          </Stack>
          <Stack gap={"32px"}>
            <Typography sx={{ fontSize: "16px", width: "608px" }}>
              Our unified marketing measurements platform empowers modern
              marketers to make better decisions using Universal Attribution,
              Marketing Mix Modelling, Incrementality Testing, and Causal AI.
            </Typography>
            <Search/>
          </Stack>
        </Stack>
        <Typography className="image">
          <img
            src="https://www.figma.com/file/gnmHEEwqC9td2pgikquJaW/image/876b1f7e9aa9de08781fe385f56bd5ec90b29dab"
            alt=""
          />
        </Typography>
        <FirstPage />
      </Box>
    </>
  );
};

export default Home;
