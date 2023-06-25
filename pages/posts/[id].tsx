import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import * as React from "react";

export interface PostPageProps {
  prop: any;
}

export default function PostPage({ prop }: PostPageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading!!!!</div>;
  }
  if (!prop) return null;
  return (
    <div>
      llll
      <p>{prop.title}</p>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await res.json();
  return {
    paths: data.data.map((post: any) => ({ params: { id: post.id } })),
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps<{ prop: any }> = async (
  context
) => {
  const postId = context.params?.id;
  if (!postId) return { notFound: true };
  const res = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await res.json();

  return {
    props: {
      prop: data,
    },
    revalidate: 5,
  };
};
