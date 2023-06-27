import { Seo } from "@/components/common";
import { getPostList } from "@/utils/posts";
import { Box, Container, Divider } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import * as React from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype/lib";
import remarkToc from "remark-toc";
import { unified } from "unified";

export interface BlogDetailProps {
  prop: any;
}

export default function BlogDetailPage({ prop }: BlogDetailProps) {
  if (!prop) return null;
  return (
    <Box>
      <Seo
        data={{
          title: prop.title,
          description: prop.description,
          url: `${process.env.HOST_URL}/blog/${prop.slug}`,
          thumbnailUrl: prop.thumbnailUrl || "",
        }}
      />
      <Container>
        llll
        <p>{prop.title}</p>
        <p>{prop.mdContent}</p>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: prop.htmlContent || "" }}></div>
      </Container>
    </Box>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getPostList();
  return {
    paths: res.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{ prop: any }> = async (
  context
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);
  if (!post) return { notFound: true };

  // const res = await fetch(
  //   `https://js-post-api.herokuapp.com/api/posts/${postId}`
  // );
  // const data = await res.json();

  // parse md to html
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: "agenda.*" })
    .use(remarkRehype)
    .use(remarkPrism)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeDocument, {
      title: "Blog details page",
    })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || "");

  post.htmlContent = file.toString();
  return {
    props: {
      prop: post,
    },
  };
};
