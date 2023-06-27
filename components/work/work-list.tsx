import { Work } from "@/models";
import React, { Fragment } from "react";
import { Box, Divider } from "@mui/material";
import { WorkCard } from "./work-card";
export interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  if (!Array.isArray(workList) || workList.length === 0) return null;
  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider />
        </Fragment>
      ))}
    </Box>
  );
}
