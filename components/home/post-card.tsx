import * as React from "react";
import { Card, CardContent } from "@mui/material";
import { Post } from "@/models";
import { format } from "date-fns";
import { PostItem } from "../blog";
export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null;

  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  );
}
