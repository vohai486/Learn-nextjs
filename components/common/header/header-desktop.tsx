import { useAuth } from "@/hooks";
import { Box, Container, Link as MuiLink, Stack } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ROUTE_LIST } from "./routes";

export function HeaderDesktop() {
  const router = useRouter();
  const { profile, logout } = useAuth();
  console.log(profile);
  const isLoggedIn = Boolean(profile?.username);
  const [routeList, setRouteList] = useState(() =>
    ROUTE_LIST.filter((route) => !route.requireLogin)
  );
  useEffect(() => {
    setRouteList(
      ROUTE_LIST.filter((route) => !route.requireLogin || isLoggedIn)
    );
  }, [isLoggedIn]);
  // const routeList = ROUTE_LIST.filter(
  //   (route) => !route.requireLogin || isLoggedIn
  // );
  console.log(isLoggedIn);
  return (
    <Box
      display={{
        xs: "none",
        md: "block",
      }}
      py={2}
    >
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {routeList.map((route) => (
            <Link
              style={{ textDecoration: "none" }}
              passHref
              key={route.path}
              href={route.path}
            >
              <MuiLink
                component="div"
                sx={{ ml: 2, fontWeight: "medium" }}
                className={clsx({
                  active: router.pathname === route.path,
                })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
          {!isLoggedIn && (
            <Link href="/login" style={{ textDecoration: "none" }} passHref>
              <MuiLink component="div" sx={{ ml: 2, fontWeight: "medium" }}>
                Login
              </MuiLink>
            </Link>
          )}
          {isLoggedIn && (
            <MuiLink
              onClick={logout}
              component="div"
              sx={{ ml: 2, fontWeight: "medium" }}
            >
              Logout
            </MuiLink>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
