import * as React from "react";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";
import { useAuth } from "@/hooks";

export default function Header() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
}
