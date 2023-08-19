import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { PostCard } from "./post-card";
import { Post } from "@/models";
import { useAuth } from "@/hooks";

export function RecentPosts() {
  const { profile } = useAuth();
  console.log(profile);
  // call API to get recent posts
  const postList: Post[] = [
    {
      id: "1",
      title: "Ronaldo",
      slug: "",
      publishedDate: "2023-06-16",
      tagList: ["Design", "Pattern"],
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: "2",
      title: "Messi",
      publishedDate: "2023-05-16",
      slug: "",
      tagList: ["Figma", "Icon Design"],
      description:
        " and a search for 'lorem ipsum' 'lorem ipsum' 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,",
    },
  ];
  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link href="/blog">View all</Link>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={4}
          sx={{
            "& > div": {
              width: {
                xs: "100%",
                // md: "50%",
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
