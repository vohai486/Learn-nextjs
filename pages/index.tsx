import { MainLayout } from "@/components/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  function goToDetailPage() {
    router.push(`/posts/${123}?ref="social"`);
  }
  return (
    <div>
      <Link href="/about">Go to about</Link>

      <button onClick={goToDetailPage}>Go to post</button>
    </div>
  );
};
Home.Layout = MainLayout;

export default Home;
