import { Box } from "@mui/material";
import React from "react";

export function HeaderMobile() {
  return (
    <Box
      display={{
        xs: "block",
        md: "none",
      }}
    >
      Header Mobile
    </Box>
  );
}
