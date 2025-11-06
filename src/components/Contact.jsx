import React from "react";
import { Box, Typography, Container, Card, Grid, IconButton } from "@mui/material";
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RevealAnimation from "./RevealAnimation";

const ContactDetailCard = ({ icon: Icon, title, detail, link, iconColor }) => {
  const handleEmailClick = () => {

    window.location.href = "mailto:uri314el@gmail.com?subject=פנייה מהאתר Full Stack Developer&body=שלום אוריאל,";
    setTimeout(() => {
      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=uri314el@gmail.com&su=פנייה מהאתר Full Stack Developer&body=שלום אוריאל,", "_blank");
    }, 600);
  };

  const handleClick = () => {
    if (title === "אימייל") {
      handleEmailClick();
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        p: 3,
        borderRadius: '1rem',
        boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
        transition: "0.3s",
        border: '1px solid #f3f4f6',
        textAlign: 'center',
        height: { xs: 'auto', md: '100%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
          boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
          transform: 'translateY(-2px)',
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: iconColor,
          mb: 2,
          color: 'white',
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          flexShrink: 0
        }}
      >
        <Icon size={24} strokeWidth={2.5} />
      </Box>

      <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5, color: '#111827' }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: iconColor,
          fontSize: '0.8rem',
          fontWeight: 600,
          mt: 1,
          direction: title === 'אימייל' || title === 'טלפון' || title === 'וואטסאפ' ? 'ltr' : 'rtl',
        }}
      >
        {detail}
      </Box>
    </Card>
  );
};

const Contact = () => {

  const contactData = [
    {
      icon: MapPin,
      title: "כתובת ומיקום",
      detail: "פתח תקווה, ישראל",
      link: "https://www.google.com/maps?q=Petah+Tikva,+Israel",
      iconColor: "#EA580C",
    },
    {
      icon: MessageCircle,
      title: "וואטסאפ",
      detail: "053-430-5167",
      link: "https://wa.me/972534305167?text=שלום%20אוריאל,%20הגעתי%20מהאתר%20שלך%20Full%20Stack%20Developer",
      iconColor: "#22C55E",
    },
    {
      icon: Phone,
      title: "טלפון",
      detail: "053-430-5167",
      link: "tel:0534305167",
      iconColor: "#16A34A",
    },
    {
      icon: Mail,
      title: "אימייל",
      detail: "uri314el@gmail.com",
      link: "mailto:uri314el@gmail.com?subject=פנייה מהאתר Full Stack Developer&body=שלום אוריאל,",
      iconColor: "#2563EB",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon fontSize="large" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/uriel-rotenberg-0a08552b6",
      color: "#0A66C2"
    },
    {
      icon: <GitHubIcon fontSize="large" />,
      label: "GitHub",
      href: "https://github.com/UrielRotenberg",
      color: "#212121"
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f9fafb",
        py: { xs: 8, md: 12 },
        direction: 'rtl',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <RevealAnimation>
            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
              <Send size={32} color="#1D4ED8" strokeWidth={2.2} />
              <Typography
                component="h2"
                sx={{
                  fontFamily:
                    "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                  fontWeight: 700,
                  pb: "9px",
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  color: "#0F172A",
                  lineHeight: 1.2,
                }}
              >
                צור קשר
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "4px solid #1D4ED8",
                width: { xs: 60, md: 90 },
                mx: "auto",
                mb: 6,
                borderRadius: "2px",
              }}
            />
          </RevealAnimation>
          <Typography
            sx={{
              color: "#0F172A",
              fontSize: "24px",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            מוזמנים ליצור קשר לשיחה על הזדמנויות ושיתופי פעולה
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {[...contactData].reverse().map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <ContactDetailCard {...item} />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            background: "linear-gradient(90deg, #1D4ED8, #3B82F6)",
            borderRadius: '1.5rem',
            boxShadow: "0 10px 30px rgba(29, 78, 216, 0.4)",
            color: "white",
            textAlign: "center",
            maxWidth: '90%',
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              fontWeight: "bold",
              fontSize: "30px",
              mb: 2,
            }}
          >
            בואו נדבר!
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "24px",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            אני תמיד מעוניין בהזדמנויות חדשות, פרויקטים מעניינים ושיתופי פעולה. אשמח לשמוע ממך ולדון כיצד אוכל לתרום לארגון שלך.
          </Typography>
        </Box>

        <Box sx={{ mt: 10 }}>
          <Typography
            variant="body2"
            align="center"
            sx={{ mb: 3, fontWeight: "bold", color: "text.secondary", fontSize: '1rem' }}
          >
            ניתן למצוא אותי גם ב:
          </Typography>
          <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
            {socialLinks.map((item) => (
              <IconButton
                key={item.label}
                aria-label={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  backgroundColor: item.color,
                  borderRadius: '50%',
                  boxShadow: 5,
                  padding: 2,
                  width: 56,
                  height: 56,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: item.color,
                    opacity: 0.9,
                    transform: "scale(1.1)",
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;