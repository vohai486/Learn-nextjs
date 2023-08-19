import React from "react";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { authApi } from "@/api-client";
import { LoginForm } from "@/components/auth";
import { MainLayout } from "@/components/layout";
import { LoginPayload } from "@/models";
import { Box, Paper, Typography } from "@mui/material";
import { getErrorMessage } from "@/utils";
import { toast } from "react-toastify";
export default function LoginPage() {
  const router = useRouter();
  const { login, logout } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginClick() {
    try {
      await login({
        username: "123213",
        password: "2123123",
      });
      router.push("/about");
    } catch (error) {
      console.log("fail to login");
    }
  }
  async function handleGetProfileClick() {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log("fail to get profile", error);
    }
  }
  async function handleLogoutClick() {
    try {
      await logout();
    } catch (error) {
      console.log("fail to logout", error);
    }
  }
  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload);
      router.push("/");
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  }
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          m: "auto",
          mt: 8,
          p: 4,
          maxWidth: "480px",
          textAlign: "center",
        }}
      >
        <Typography component="h1" variant="h5" mb={3}>
          Login
        </Typography>
        <LoginForm onSubmit={handleLoginSubmit} />
      </Paper>
    </Box>
  );
}

LoginPage.Layout = MainLayout;
