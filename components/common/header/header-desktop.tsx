import * as React from "react";
import { Box, Container, Stack, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { ROUTE_LIST } from "./routes";
import { useRouter } from "next/router";
import clsx from "clsx";

export function HeaderDesktop() {
  const router = useRouter();
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
          {ROUTE_LIST.map((route) => (
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
        </Stack>
      </Container>
    </Box>
  );
}
