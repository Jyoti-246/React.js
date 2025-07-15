import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const Mui = () => {
  return (
    <Box
      backgroundColor="#1a1a1a"
      padding={2}
      maxWidth={"400px"}
      border={"1px solid"}
      borderColor={"#808080"}
      borderRadius={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        alignContent={"center"}
        justifyContent={"space-between"}
      >
        <Typography color="white" fontSize={"32px"}>
          Toothbrush
        </Typography>
        <Typography color="white">$4.50</Typography>
      </Stack>
      <Typography color="white">
        Pinstriped cornflower blue cotton blouse takes you on a walk to the park
        or just down the hall.
      </Typography>
      <Divider sx=  {{ backgroundColor: "white", mt: 1 }} />
      <Typography color="white" fontSize={"16px"} sx={{ mt: 1 }}>
        Select type
      </Typography>
      <Stack sx={{ mt: 1 }} direction={"row"} gap={1}>
        <Chip color="primary" label="Soft" size="small" />
        <Chip color="primary" label="Medium" size="small" />
        <Chip color="primary" label="Hard" size="small" />
      </Stack>
    </Box>
  );
};

export default Mui;
