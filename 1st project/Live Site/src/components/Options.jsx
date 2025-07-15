import React, { useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { OptionsData } from "./OptionsData";
import LSButton from "./LSButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Options = () => {
  const [option, setOption] = useState("Connect");
  const handleClick = (title) => {
    setOption(title);
  };

  const selected = OptionsData.filter((data) => data.id == option)[0];

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Stack>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              gap: "16px",
              padding: "10px",
              backgroundColor: "#F7F7F7",
              borderRadius: "48px",
              textAlign: "center",
              mt: "22px",
              ml:"418px",
              mr:"418px",
              justifyContent:"space-between"
            }}
          >
            {OptionsData.map((options) => (
              <LSButton
                title={options.id}
                onClick={() => handleClick(options.id)}
                selected={options.id == option}
              />
            ))}
          </Stack>
          <Box sx={{ paddingTop: "64px", ml:"105px", mr:"104px"}}>
            <Stack direction={"row"} gap={"46px"}>
              <Stack gap={4}>
                <Typography
                  sx={{
                    fontSize: "21px",
                    fontWeight: "600",
                    fontFamily: "kufam",
                  }}
                >
                  {selected.title}
                </Typography>
                <Stack gap={2.5}>
                  {selected.points.map((point) => (
                    <div>
                      <Stack direction={"row"} gap={1.5}>
                        <CheckCircleOutlineIcon sx={{ color: "#15B79E" }} />
                        <Typography sx={{ fontSize: "14px" }}>
                          {point}
                        </Typography>
                      </Stack>
                    </div>
                  ))}
                </Stack>
                <Typography>
                  <Button
                    endIcon={<img src="src/assets/button-icon.png" />}
                    sx={{
                      backgroundColor: "#6938ef",
                      fontWeight: "600",
                      fontSize: "16px",
                      px: "20px",
                      py: "15px",
                      borderRadius: "68px",
                      color: "white",
                    }}
                  >
                    See it in action
                  </Button>
                </Typography>
              </Stack>
              <Stack>
                <img src={selected.image}></img>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Options;
