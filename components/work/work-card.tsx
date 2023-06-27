import { Work } from "@/models";
import React from "react";
import { Stack, Box, Typography, Chip } from "@mui/material";
import Image from "next/image";
export interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
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
        <Image src={work.thumbnailUrl} alt={work.title} fill={true} />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {work.title}
        </Typography>
        <Stack direction="row" my={2}>
          <Chip
            color="default"
            label={new Date(+work.createdAt).getFullYear()}
            size="small"
          />
          <Typography color="GrayText" ml={3}>
            {work.tagList.join(", ")}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
