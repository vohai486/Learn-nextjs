import { PostItem } from "@/components/blog";
import { MainLayout } from "@/components/layout";
import { Post } from "@/models";
import { getPostList } from "@/utils/posts";
import { Box, Container, Divider } from "@mui/material";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import * as React from "react";

export interface BlogListPageProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>
        <Box
          component="ul"
          sx={{
            listStyleType: "none",
            p: 0,
          }}
        >
          {posts.map((post) => (
            <li key={post.title}>
              <Link href={`/blog/${post.slug}`}>
                <PostItem post={post} />
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

Blog.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // server-side, trong thời gian build
  // const res = await fetch(
  //   "https://js-post-api.herokuapp.com/api/posts?_page=1"
  // );
  // const data = await res.json();

  // convert markdown files into list of javascript objects
  const postList = await getPostList();
  return {
    props: {
      posts: postList,
    },
  };
};
