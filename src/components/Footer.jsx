import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 6 },
        background: "#0F172A",
        color: "#94A3B8",
        textAlign: "center",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          כל הזכויות שמורות, אוריאל רוטנברג 2025 ©
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;