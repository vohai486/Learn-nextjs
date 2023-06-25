import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import * as React from "react";

export interface PostListPageProps {
  posts: any[];
}

export default function App({ posts }: PostListPageProps) {
  return (
    <div>
      Post List Page
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async () => {
  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await res.json();
  return {
    props: {
      posts: data.data.map((item: any) => ({ id: item.id, title: item.title })),
    },
  };
};
