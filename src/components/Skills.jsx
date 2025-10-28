import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  Chip,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import BuildIcon from "@mui/icons-material/Build";
import RevealAnimation from "./RevealAnimation";

const SkillCategoryCard = ({
  icon,
  title,
  skills,
  iconColor,
  chipBg,
  chipColor,
  delay,
}) => (
  <RevealAnimation delay={delay} trigger={0.1}>
    <Card
      sx={{
        height: "100%",
        boxShadow: 4,
        borderRadius: 3,
        p: 3,
        pt: 6,
        position: "relative",
        transition: "0.3s",
        "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -25,
          right: 20,
          width: 55,
          height: 55,
          backgroundColor: iconColor,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          boxShadow: 3,
        }}
      >
        {icon}
      </Box>

      <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main", mb: 3 }}>
        {title}
      </Typography>

      <Grid container spacing={1.5}>
        {skills.map((skill) => (
          <Grid item xs={6} key={skill}>
            <Chip
              label={skill}
              sx={{
                width: "100%",
                backgroundColor: chipBg,
                color: chipColor,
                fontWeight: "bold",
                py: 1.2,
                height: "auto",
                boxShadow: 1,
                transition: "0.2s",
                "&:hover": { boxShadow: 3 },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  </RevealAnimation>
);

const Skills = () => {
  const skillData = [
    {
      icon: <DesktopWindowsIcon />,
      title: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "MUI", "Axios"],
      iconColor: "#1976D2",
      chipBg: "rgba(25, 118, 210, 0.1)",
      chipColor: "#1976D2",
      delay: 0.1,
    },
    {
      icon: <CodeIcon />,
      title: "Backend",
      skills: ["C#", "ASP.NET", "Dapper", "REST API", "Node.js", "Express"],
      iconColor: "#9C27B0",
      chipBg: "rgba(156, 39, 176, 0.1)",
      chipColor: "#9C27B0",
      delay: 0.2,
    },
    {
      icon: <StorageIcon />,
      title: "Database",
      skills: ["SQL Server", "MongoDB", "Stored Procedures", "Query Optimization"],
      iconColor: "#4CAF50",
      chipBg: "rgba(76, 175, 80, 0.1)",
      chipColor: "#4CAF50",
      delay: 0.3,
    },
    {
      icon: <BuildIcon />,
      title: "Tools & Infrastructure",
      skills: ["Git", "TFS", "Visual Studio", "VS Code", "ExcelJS", "Postman"],
      iconColor: "#FF9800",
      chipBg: "rgba(255, 152, 0, 0.1)",
      chipColor: "#FF9800",
      delay: 0.4,
    },
  ];

  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#EFF6FF", }}>
      <Container maxWidth="lg">
        <RevealAnimation>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 1 }}>
            מיומנויות טכניות <Box component="span" sx={{ color: "secondary.main" }}>⌨️</Box>
          </Typography>
          <Box sx={{ borderBottom: "4px solid", borderColor: "secondary.main", width: 80, mx: "auto", mb: 6 }} />
        </RevealAnimation>

        <Grid container spacing={4}>
          {skillData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <SkillCategoryCard {...item} />
            </Grid>
          ))}
        </Grid>

        {/* בלוק כחול תחתון */}
        <RevealAnimation delay={0.6} trigger={0.1}>
          <Box
            sx={{
              mt: 7,
              p: { xs: 3, md: 4 },
              background: "linear-gradient(145deg, #1976D2, #0E1F40)",
              borderRadius: 3,
              boxShadow: 6,
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              תכונות נוספות
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto" }}>
              תקשורת בין-אישית מצוינת, חשיבה אנליטית מפותחת, יכולת עבודה עצמאית ובצוות, וראייה מערכתית חדה.
            </Typography>
          </Box>
        </RevealAnimation>
      </Container>
    </Box>
  );
};

export default Skills;