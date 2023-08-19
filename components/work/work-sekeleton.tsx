import { Work } from "@/models";
import React from "react";
import { Stack, Box, Typography, Chip, Skeleton } from "@mui/material";
import Image from "next/image";

export function WorkSkeleton() {
  return (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={2}
    >
      <Box
        width={{
          xs: "100%",
          sm: "246px",
        }}
        height="180px"
        position="relative"
        flexShrink={0}
      >
        <Skeleton variant="rectangular" width={246} height={180} />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h4" fontWeight="bold">
          <Skeleton />
        </Typography>
        <Stack direction="row" my={2}>
          <Skeleton variant="rectangular" width={50} height={20} />
          <Typography color="GrayText" ml={3} flexGrow={1}>
            <Skeleton />
          </Typography>
        </Stack>
        <Typography>
          <Skeleton />
          <Skeleton />
          <Skeleton width={"40%"} />
        </Typography>
      </Box>
    </Stack>
  );
}
