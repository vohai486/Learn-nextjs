import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { PostCard } from "./post-card";
import { Work } from "@/models";
import { WorkList } from "../work";

export function FeaturedWorks() {
  // call API to get recent posts
  const workList: Work[] = [
    {
      id: "1",
      title: "Ronaldo",
      createdAt: "1687788352528",
      updatedAt: "1687788352528",
      tagList: ["Design", "Pattern"],
      shortDescription:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      fullDescription: "",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      title: "Messi",
      createdAt: "1687788352528",
      updatedAt: "1687788352528",
      tagList: ["Figma", "Icon Design"],
      fullDescription: "",
      shortDescription:
        " and a search for 'lorem ipsum' 'lorem ipsum' 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1687511016334-bccc4df63130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      title: "Đây là Rap Việt",
      createdAt: "1687788352528",
      updatedAt: "1687788352528",
      tagList: ["Figma", "Icon Design"],
      fullDescription: "",
      shortDescription:
        " and a search for 'lorem ipsum' 'lorem ipsum' 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,",
      thumbnailUrl:
        "https://plus.unsplash.com/premium_photo-1676654936116-4ee0e9829651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={4}>
          Featured Works
        </Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
