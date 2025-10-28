import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Card,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RevealAnimation from "./RevealAnimation";

// 🔹 רכיב עזר לכרטיס פרטי קשר
const ContactDetailCard = ({ icon, title, value, href, isBlue = false }) => {
  const theme = useTheme();
  const Content = (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Box
        sx={{
          color: isBlue ? "secondary.light" : "secondary.main",
          mr: 2,
          fontSize: 30,
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="caption"
          sx={{
            mb: 0.5,
            color: isBlue ? "rgba(255,255,255,0.7)" : "text.secondary",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            color: isBlue ? "white" : "text.primary",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );

  const openNewTab = href && (href.startsWith("http") || href.startsWith("https"));

  const cardBase = {
    display: "flex",
    p: 3,
    borderRadius: 2,
    textDecoration: "none",
    transition: "0.3s",
    cursor: href ? "pointer" : "default",
    "&:hover": {
      transform: href ? "translateY(-3px)" : "none",
      boxShadow: href ? 6 : 3,
    },
  };

  return isBlue ? (
    <Box
      sx={{
        ...cardBase,
        backgroundColor: "rgba(255,255,255,0.1)",
        color: "white",
        border: "1px solid rgba(255,255,255,0.15)",
        width: "100%",
      }}
      component={href ? "a" : "div"}
      href={href || undefined}
      target={openNewTab ? "_blank" : undefined}
      rel={openNewTab ? "noopener noreferrer" : undefined}
    >
      {Content}
    </Box>
  ) : (
    <Card
      sx={{
        ...cardBase,
        boxShadow: 3,
        borderLeft: `4px solid ${theme.palette.secondary.main}`,
        position: "relative",
        zIndex: 3,
        backgroundColor: "white",
        overflow: "visible",
      }}
      component={href ? "a" : "div"}
      href={href || undefined}
      target={openNewTab ? "_blank" : undefined}
      rel={openNewTab ? "noopener noreferrer" : undefined}
    >
      {Content}
    </Card>
  );
};

const Contact = () => {
  const contactDetails = [
    {
      icon: <PhoneIcon />,
      title: "טלפון",
      value: "053-430-5167",
      href: "tel:0534305167",
    },
    {
      icon: <WhatsAppIcon />,
      title: "וואטסאפ",
      value: "053-430-5167",
      href: "https://wa.me/972534305167",
    },
    {
      icon: <EmailIcon />,
      title: "אימייל",
      value: "uri314el@gmail.com",
      href: "/contact",
    },
    {
      icon: <LocationOnIcon />,
      title: "מיקום",
      value: "פתח תקווה, ישראל",
      href: "https://www.google.com/maps?q=Petah+Tikva,+Israel",
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#FFFFFFCC",
        position: "relative",
        overflow: "visible",
      }}
    >
      <Container maxWidth="lg">
        <RevealAnimation>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            צור קשר <Box component="span" sx={{ color: "secondary.main" }}>📧</Box>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            מוזמנים ליצור קשר לשיתופי פעולה או הזדמנויות חדשות.
          </Typography>
        </RevealAnimation>

        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="stretch"
          sx={{ overflow: "visible" }}
        >
          {/* 🟦 כרטיס כחול - בואו נדבר */}
          <Grid item xs={12} md={5}>
            <RevealAnimation delay={0.1}>
              <Card
                sx={{
                  p: { xs: 3, md: 5 },
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "linear-gradient(145deg, #1976D2, #0E1F40)",
                  color: "white",
                  borderRadius: 3,
                  boxShadow: 10,
                  position: "relative",
                  zIndex: 1,
                  overflow: "visible",
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  בואו נדבר!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  אני תמיד פתוח להצעות מעניינות, פרויקטים ייחודיים ושיתופי פעולה.
                </Typography>

                <Grid
                  container
                  spacing={2}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    pb: 1,
                  }}
                >
                  {contactDetails.map((item, index) => (
                    <Grid item key={index} sx={{ minWidth: 180 }}>
                      <ContactDetailCard {...item} isBlue />
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </RevealAnimation>
          </Grid>

          {/* 🟩 כרטיסים לבנים - דסקטופ */}
          <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
            <Grid container spacing={3}>
              {contactDetails.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <RevealAnimation delay={0.2 + index * 0.1}>
                    <ContactDetailCard {...item} />
                  </RevealAnimation>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* רשתות חברתיות */}
        <RevealAnimation delay={0.6}>
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 7, mb: 2, fontWeight: "bold", color: "text.secondary" }}
          >
            ניתן למצוא אותי גם ב:
          </Typography>
          <Box display="flex" justifyContent="center" gap={3}>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/uriel-rotenberg-0a08552b6"
              target="_blank"
              sx={{
                color: "#0A66C2",
                border: "1px solid #0A66C2",
                "&:hover": { backgroundColor: "rgba(10, 102, 194, 0.1)" },
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/UrielRotenberg"
              target="_blank"
              sx={{
                color: "#212121",
                border: "1px solid #212121",
                "&:hover": { backgroundColor: "rgba(33, 33, 33, 0.1)" },
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
        </RevealAnimation>
      </Container>
    </Box>
  );
};

export default Contact;