import { useAuth } from "@/hooks/use-auth";
import { LayoutProps } from "@/models/common";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export function Auth({ children }: LayoutProps) {
  const router = useRouter();
  const { profile, firstLoading, isLoading } = useAuth();
  useEffect(() => {
    if (!firstLoading && !profile?.username) {
      router.push("/login");
    }
  }, [router, profile, firstLoading]);
  //   !profile?.username
  if (isLoading) {
    return <p>Loading</p>;
  }
  return <div>{children}</div>;
}
