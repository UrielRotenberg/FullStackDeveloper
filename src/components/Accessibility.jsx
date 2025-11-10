import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { AccessibilityNew } from "@mui/icons-material";
import { Mail, Phone, MessageCircle } from "lucide-react"; // ✅ האייקונים שלך

const Accessibility = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:uri314el@gmail.com?subject=פנייה בנושא נגישות מהאתר Full Stack Developer&body=שלום אוריאל,";
    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=uri314el@gmail.com&su=פנייה בנושא נגישות מהאתר Full Stack Developer&body=שלום אוריאל,",
        "_blank"
      );
    }, 600);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9fafb",
        py: { xs: 8, md: 12 },
        direction: "rtl",
        fontFamily: "Heebo, sans-serif",
        textAlign: "center",
        color: "#0F172A",
      }}
    >
      <Container maxWidth="md">
        {/* כותרת + אייקון */}
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <AccessibilityNew sx={{ color: "#1D4ED8", fontSize: 48 }} />
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "#0F172A",
            }}
          >
            הצהרת נגישות
          </Typography>
        </Box>

        {/* פס כחול מתחת לכותרת */}
        <Box
          sx={{
            borderBottom: "4px solid #1D4ED8",
            width: { xs: 60, md: 90 },
            mx: "auto",
            mb: 6,
            borderRadius: "2px",
          }}
        />

        {/* תוכן */}
        <Typography
          sx={{
            mb: 2,
            fontSize: "1.1rem",
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          אתר זה מופעל על ידי אוריאל רוטנברג ונועד להיות נגיש לכלל המשתמשים, לרבות אנשים עם מוגבלות.
          האתר פותח בהתאם לחוק הישראלי 5568, המבוסס על תקן בינלאומי WCAG 2.0 ברמה AA.
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: "1.1rem",
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          אם נתקלתם בקושי בשימוש באתר, נשמח לסייע ולשפר. ניתן לפנות אלינו בכל שאלה או הערה בנושא הנגישות באמצעים הבאים:
        </Typography>

        {/* אמצעי קשר */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            mb: 4,
          }}
        >
          {/* אימייל */}
          <Box
            onClick={handleEmailClick}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              color: "#2563EB",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <Mail size={22} />
            <span>uri314el@gmail.com</span>
          </Box>

          {/* טלפון */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#16A34A",
            }}
          >
            <Phone size={22} />
            <a
              href="tel:0534305167"
              style={{ color: "#16A34A", textDecoration: "none" }}
            >
              053-430-5167
            </a>
          </Box>

          {/* וואטסאפ */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#22C55E",
            }}
          >
            <MessageCircle size={22} />
            <a
              href="https://wa.me/972534305167?text=שלום%20אוריאל,%20הגעתי%20מהאתר%20שלך%20Full%20Stack%20Developer%20בנושא%20נגישות"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#22C55E", textDecoration: "none" }}
            >
              שליחת הודעה בוואטסאפ
            </a>
          </Box>
        </Box>

        {/* קרדיט */}
        <Typography sx={{ mt: 6, color: "#475569", fontSize: "1rem" }}>
          אתר נגיש לפי תקן ישראלי 5568
        </Typography>
      </Container>
    </Box>
  );
};

export default Accessibility;
