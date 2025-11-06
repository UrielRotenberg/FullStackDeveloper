import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
          component="div"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {/* קישור לעמוד הצהרת נגישות */}
          <RouterLink
            to="/accessibility"
            aria-label="לעמוד הצהרת הנגישות"
            style={{
              color: "#E2E8F0",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            הצהרת נגישות
          </RouterLink>

          <span>| כל הזכויות שמורות © אוריאל רוטנברג 2025</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;