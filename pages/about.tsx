import { AdminLayout, MainLayout } from "@/components/layout";
import { useRouter } from "next/router";
import * as React from "react";
import { NextPageWithLayout } from "../models";
import { Box, Typography, Button } from "@mui/material";
import { Header } from "@/components/common/header";
export interface IAppProps {}
// const Header = dynamic(() => import("@/components/common/header"), {
//   ssr: false,
// });
const About: NextPageWithLayout = (props: IAppProps) => {
  const [postList, setPostList] = React.useState([]);
  const router = useRouter();
  const page = router.query?.page;
  React.useEffect(() => {
    (async () => {
      if (!page) return;
      const res = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await res.json();
      setPostList(data.data);
    })();
  }, [page]);
  function handleNextClick() {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  }
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <Button variant="contained" color="success"></Button>
      <Header />
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next Page</button>
    </Box>
  );
};

About.Layout = AdminLayout;
export default About;
// Muon dung MainLayout cho trang About add thuoc tinh Layout

// export async function getStaticProps() {
//   console.log("get static props");
//   return {
//     props: {},
//   };
// }
