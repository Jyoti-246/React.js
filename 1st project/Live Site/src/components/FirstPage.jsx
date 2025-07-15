import { Box, Typography, Stack, Button } from "@mui/material";
import React from "react";
import Options from "./Options";
import Companies from "./Companies";

const FirstPage = () => {
  return (
    <div>
      <Box>
        <Stack sx={{ gap: "32px" }}>
          <Stack
            sx={{
              py:6,
              display:'flex',
              justifyContent: "center",
              alignItems: "center",
              flexDirection:'row',
              gap:0.5
            }}
          >
              <Typography sx={{ fontSize: "26px", fontWeight: "600" }}>
                Trusted by leading
              </Typography>
              <Typography
                sx={{
                  color: "#6938ef",
                  fontSize: "26px",
                  fontWeight: "600",
                }}
              >
                Brands & Agencies
              </Typography>
              <Typography sx={{ fontSize: "26px", fontWeight: "600" }}>
                worldwide
              </Typography>
           
          </Stack>

          <Typography className="logos" sx={{ paddingBottom: "52px" }}>
            <img src="src\assets\logos.png" alt="" />
          </Typography>
        </Stack>
        <Stack>
          <Typography
            gap={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "80px",
            }}
          >
            <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
              Measure
            </Typography>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "600",
                color: "#6938ef",
                direction: "row",
              }}
            >
              marketing performance
            </Typography>
            <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
              & take action with
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            confidence in a privacy-first world
          </Typography>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "14px",
              direction: "column",
            }}
          >
            <Typography
              sx={{ fontWeight: "400", fontSize: "16px", color: "#6B7280" }}
            >
              Transform your marketing data into actionable insights. Use
              advanced forecasting & analytics to make data-backed
            </Typography>
            <Typography
              sx={{ fontWeight: "400", fontSize: "16px", color: "#6B7280" }}
            >
              decisions, optimize budget allocation, & achieve unmatched
              advertising efficiency.
            </Typography>
          </Stack>
        </Stack>
        <Options />
        <Companies />
      </Box>
    </div>
  );
};

export default FirstPage;
