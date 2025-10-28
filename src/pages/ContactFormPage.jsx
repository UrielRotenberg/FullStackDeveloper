import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ContactFormPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #E3F2FD, #FFFFFF)",
        py: 5,
      }}
    >
      <Container maxWidth="sm">
        <Box
          component="form"
          action="https://formspree.io/f/xldojwad"
          method="POST"
          sx={{
            backgroundColor: "white",
            boxShadow: 6,
            borderRadius: 3,
            p: 5,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "primary.main", mb: 3 }}
          >
            טופס יצירת קשר ✉️
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <input
              type="text"
              name="name"
              placeholder="שם מלא"
              required
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="אימייל"
              required
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="הודעה..."
              required
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                marginTop: "10px",
                backgroundColor: "#1976D2",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#0E1F40")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#1976D2")
              }
            >
              שלח הודעה
            </button>
          </Box>

          <Typography sx={{ mt: 4 }}>
            <Link to="/" style={{ color: "#1976D2", textDecoration: "none" }}>
              ← חזרה לדף הראשי
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFormPage;