import { LayoutProps } from "@/models/common";
import Link from "next/link";
import * as React from "react";
import { Auth } from "../common";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter();
  const { profile, logout } = useAuth({
    revalidateOnMount: false,
  });
  async function handleLogoutClick() {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.log("fail to logout", error);
    }
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <p>{profile?.username}</p>
      <button onClick={handleLogoutClick}>Logout</button>
      <Link href="">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </Auth>
  );
}
