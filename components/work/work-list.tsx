import { Work } from "@/models";
import React, { Fragment } from "react";
import { Box, Divider } from "@mui/material";
import { WorkCard } from "./work-card";
import { WorkSkeleton } from "./work-sekeleton";
export interface WorkListProps {
  workList: Work[];
  isLoading?: boolean;
}

export function WorkList({ workList, isLoading }: WorkListProps) {
  if (isLoading)
    return (
      <Box>
        {Array.from({ length: 3 }).map((work, i) => (
          <Fragment key={i}>
            <WorkSkeleton />
            <Divider sx={{ my: 3 }} />
          </Fragment>
        ))}
      </Box>
    );
  if (!Array.isArray(workList) || workList.length === 0) return null;
  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  );
}
