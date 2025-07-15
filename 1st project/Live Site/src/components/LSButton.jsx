import { Button } from "@mui/material";
import React, { useEffect, useLayoutEffect } from "react";

const LSButton = ({ title , onClick, selected}) => {
  
  return (
    <Button
      onClick = {onClick}
      className="options"
      sx={{
        fontWeight: "600",
        fontSize: "14px",
        color: selected?"white":"black",
        py: "12px",
        px: "36px",
        borderRadius: "50px",
        textTransform: "none",
        backgroundColor: selected ? "#6938ef":""
      }}
    >
      {title}
    </Button>
  );
};

export default LSButton;
