import { LayoutProps } from "@/models/common";
import React, { useEffect } from "react";
import { Stack, Box, Container } from "@mui/material";
import { Footer } from "../common";
import { Header } from "../common/header";

export function MainLayout({ children }: LayoutProps) {
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
