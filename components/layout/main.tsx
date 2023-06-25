import { LayoutProps } from "@/models/common";
import Link from "next/link";
import React, { useEffect } from "react";

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("Main layout mounting");
    return () => console.log("Main layout unmounting");
  }, []);
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </div>
  );
}
