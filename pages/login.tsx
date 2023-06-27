import * as React from "react";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { authApi } from "@/api-client";

export default function LoginPage() {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginClick() {
    try {
      await login();
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
  return (
    <div>
      <h1>Login Page</h1>
      <p>{profile?.email}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Go to About</button>
      <button onClick={() => router.push("/about")}>Logout</button>
    </div>
  );
}
