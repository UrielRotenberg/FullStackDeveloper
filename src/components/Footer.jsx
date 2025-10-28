import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        background: "linear-gradient(145deg, #0E1F40, #102850)",
        color: "white",
        textAlign: "center",
        borderTop: "4px solid #1976D2",
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          © {new Date().getFullYear()} אוריאל רוטנברג. כל הזכויות שמורות.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;