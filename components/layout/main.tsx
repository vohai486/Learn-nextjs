import { LayoutProps } from "@/models/common";
import React, { useEffect } from "react";
import { Stack, Box, Container } from "@mui/material";
import { Footer } from "../common";
import dynamic from "next/dynamic";
import { useAuth } from "@/hooks";
import Header from "../common/header";
// const Header = dynamic(() => import("../common/header"), { ssr: false });
export function MainLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  console.log(profile);
  useEffect(() => {
    console.log("Main layout mounting");
    return () => console.log("Main layout unmounting");
  }, []);
  return (
    <Stack minHeight="100vh">
      <Header></Header>
      <Box component="main" flexGrow={1}>
        <div>{children}</div>
      </Box>
      <Footer />
    </Stack>
  );
}
