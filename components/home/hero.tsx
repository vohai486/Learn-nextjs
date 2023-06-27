import * as React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import avatar from "@/images/avatar.png";
export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{
            xs: "column-reverse",
            md: "row",
          }}
          alignItems={{
            xs: "center",
            md: "flex-start",
          }}
          textAlign={{
            xs: "center",
            md: "left",
          }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{
                xs: 3,
                md: 5,
              }}
            >
              Hi, I am John,
              <br /> Creative Technologist
            </Typography>
            <Typography variant="body1" mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button size="large" variant="contained">
              Download Resume
            </Button>
          </Box>
          <Box
            sx={{
              width: "240px",
              boxShadow: "-5px 13px",
              color: "secondary.light",
              borderRadius: "50%",
            }}
          >
            <Image
              src={avatar}
              alt="avatar"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
