import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      lang="he"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: "#0F172A",
        color: "#E2E8F0", // ניגודיות תקינה
        textAlign: "center",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="div"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          <Link
            href="/accessibility.html"
            underline="hover"
            aria-label="לעמוד הצהרת הנגישות"
            sx={{ color: "#E2E8F0", fontWeight: 500 }}
          >
            הצהרת נגישות
          </Link>
          <span> | כל הזכויות שמורות © אוריאל רוטנברג 2025</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;