import React from "react";
import { Box, Typography, Container, Card } from "@mui/material";
import { Layers, Code, Database, Wrench } from 'lucide-react';
import RevealAnimation from "./RevealAnimation";

const SkillCategoryCard = ({ icon, title, skills, iconColor, chipBg, delay }) => {
  return (
    <RevealAnimation delay={delay} trigger={0.1}>
      <Card
        sx={{
          width: { xs: "100%", sm: 480, md: 560 },
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          borderRadius: 4,
          p: 4,
          pt: 6,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "0.25s ease",
          '&:hover': {
            transform: "translateY(-6px)",
            boxShadow: "0 12px 24px rgba(0,0,0,0.14)",
          },
        }}
      >

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            mb: 3,
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              padding: "16px",
              backgroundColor: iconColor,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              boxShadow: 2,
            }}
          >
            {icon}
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "24px",
              color: "#0F172A",
              textAlign: "right",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            width: "100%",
          }}
        >
          {skills.map((skill) => (
            <Box
              key={skill}
              sx={{
                backgroundColor: chipBg,
                color: "#334155",
                borderRadius: 2,
                fontWeight: 600,
                fontSize: "0.95rem",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 1,
                transition: "0.2s",
                padding: "14px",
                '&:hover': {
                  boxShadow: 3,
                  transform: "translateY(-2px)",
                },
              }}
            >
              {skill}
            </Box>
          ))}
        </Box>
      </Card>
    </RevealAnimation>
  );
};

const Skills = () => {
  const skillData = [
    {
      icon: <Layers />,
      title: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "MUI", "Axios"],
      iconColor: "#2563EB",
      chipBg: "#EFF6FF",
      delay: 0.1,
    },
    {
      icon: <Code />,
      title: "Backend",
      skills: ["#C", "ASP.NET", "Dapper", "REST API", "Node.js", "Express"],
      iconColor: "#7E22CE",
      chipBg: "#FAF5FF",
      delay: 0.2,
    },
    {
      icon: <Database />,
      title: "Database",
      skills: ["SQL Server", "MongoDB", "Stored Procedures", "Query Optimization"],
      iconColor: "#16A34A",
      chipBg: "#F0FDF4",
      delay: 0.3,
    },
    {
      icon: <Wrench />,
      title: "Tools & Infrastructure",
      skills: ["Git", "TFS", "Visual Studio", "VS Code", "ExcelJS", "Postman"],
      iconColor: "#EA580C",
      chipBg: "#FFF7ED",
      delay: 0.4,
    },
  ];

  return (
    <Box id="skills" sx={{ backgroundColor: "#EFF6FF", py: { xs: 10, md: 14 } }}>
      <Container maxWidth="xl" sx={{ maxWidth: "1400px !important" }}>
        <RevealAnimation>
          <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
            <Code size={32} color="#1D4ED8" strokeWidth={2.2} />
            <Typography
              component="h2"
              sx={{
                fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                fontWeight: 700,
                pb: "9px",
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: "#0F172A",
                lineHeight: 1.2,
              }}
            >
              מיומנויות טכניות
            </Typography>
          </Box>
          <Box
            sx={{
              borderBottom: "4px solid #1D4ED8",
              width: 90,
              mx: "auto",
              mb: 6,
              borderRadius: "2px",
            }}
          />
        </RevealAnimation>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {skillData.map((item) => (
            <SkillCategoryCard key={item.title} {...item} />
          ))}
        </Box>

        <RevealAnimation delay={0.6} trigger={0.1}>
          <Box
            sx={{
              mt: 10,
              px: 4,
              py: 4,
              width: "100%",
              maxWidth: 1140,
              mx: "auto",
              background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
              borderRadius: 4,
              boxShadow: 8,
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: "30px",
                mb: 2,
              }}
            >
              תכונות נוספות
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              בעל תקשורת בין-אישית מצוינת וחשיבה אנליטית מפותחת. יכולת גבוהה בעבודה עצמאית ובצוות,
              עם ראייה מערכתית ותשומת לב לפרטים.
            </Typography>
          </Box>
        </RevealAnimation>
      </Container>
    </Box>
  );
};

export default Skills;