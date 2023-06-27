import * as React from "react";
import { Box } from "@mui/material";

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
