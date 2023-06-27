import { MainLayout } from "@/components/layout";
import React from "react";
import { NextPageWithLayout } from "../models";
import { Box } from "@mui/material";
import { FeaturedWorks, HeroSection } from "@/components/home";
import { RecentPosts } from "@/components/home/recent-posts";
import { Seo } from "@/components/common";
const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: "Hello",
          description: "Hello next JS",
          url: "https://learn-nextjs-mu-taupe.vercel.app/",
          thumbnailUrl:
            "https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  );
};
Home.Layout = MainLayout;

export default Home;
