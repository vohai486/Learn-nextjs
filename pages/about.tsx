import Header from "@/components/common/header";
import { MainLayout } from "@/components/layout";
import { useRouter } from "next/router";
import * as React from "react";
import { NextPageWithLayout } from "../models";

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
    <div>
      About Page
      <Header />
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next Page</button>
    </div>
  );
};

About.Layout = MainLayout;
export default About;
// Muon dung MainLayout cho trang About add thuoc tinh Layout

// export async function getStaticProps() {
//   console.log("get static props");
//   return {
//     props: {},
//   };
// }
