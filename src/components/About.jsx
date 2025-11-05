import React from "react";
import { Box, Typography, Grid, Container, Card, } from "@mui/material";
import TargetIcon from "@mui/icons-material/TrackChanges";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { User } from "lucide-react";
import RevealAnimation from "./RevealAnimation";

const CoreFeature = ({ icon, title, description, delay }) => (
    <RevealAnimation delay={delay} trigger={0.2}>
        <Card
            sx={{
                width: { xs: "100%", md: "552px" },
                minHeight: "108px",
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "flex-start",
                p: "24px",
                borderRadius: "12px",
                backgroundColor: "#EFF6FF",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
                    transform: "translateY(-2px)",
                },
            }}
        >

            <Box sx={{ textAlign: "right", flex: 1 }}>
                <Typography
                    component="h4"
                    sx={{
                        color: "#0F172A",
                        fontSize: "20px",
                        fontWeight: "bold",
                        fontFamily: "ui-sans-serif, system-ui, sans-serif",
                        mb: 1,
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    component="p"
                    sx={{
                        color: "#475569",
                        fontSize: "16px",
                        fontFamily: "ui-sans-serif, system-ui, sans-serif",
                        lineHeight: 1.6,
                    }}
                >
                    {description}
                </Typography>
            </Box>

            <Box
                sx={{
                    backgroundColor: "#1D4ED8",
                    borderRadius: "8px",
                    padding: "12px",
                    color: "#ffffff",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    ml: 2.5,
                }}
            >
                {icon}
            </Box>
        </Card>
    </RevealAnimation>
);

const About = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: "#FFFFFFCC",
                direction: "rtl",
            }}
        >
            <Container maxWidth="lg">
                <RevealAnimation>
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 1,
                            }}
                        >
                            <User size={32} color="#1D4ED8" strokeWidth={2.5} />
                            <Typography
                                component="h2"
                                sx={{
                                    fontFamily:
                                        "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                                    fontWeight: 700,
                                    fontSize: { xs: "2.5rem", md: "3rem" },
                                    color: "#0F172A",
                                    lineHeight: 1.2,
                                }}
                            >
                                אודות
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                borderBottom: "4px solid #1D4ED8",
                                width: 90,
                                mx: "auto",
                                borderRadius: "2px",
                            }}
                        />
                    </Box>
                </RevealAnimation>

                <Grid container spacing={5} alignItems="flex-start">
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                textAlign: "right",
                                width: { xs: "100%", md: "550px" }, 
                                ml: "auto",
                                px: { xs: 2, sm: 0 },
                            }}
                        >
                            <Typography
                                component="h3"
                                sx={{
                                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                    fontWeight: "bold",
                                    fontSize: "30px",
                                    color: "#0F172A",
                                    mb: 2,
                                }}
                            >
                                תקציר מקצועי
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#475569",
                                    fontSize: "18px",
                                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                    lineHeight: 1.7,
                                    mb: 2,
                                }}
                            >
                                מפתח פול סטאק עם ניסיון של כשנתיים בפיתוח מערכות פנים־ארגוניות מורכבות
                                בשירות בתי הסוהר.
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#475569",
                                    fontSize: "18px",
                                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                    lineHeight: 1.7,
                                    mb: 2,
                                }}
                            >
                                בעל התמחות מלאה בטכנולוגיות צד לקוח ושרת, עם דגש על React, C#, MUI, SQL
                                Server ו־Dapper.
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#475569",
                                    fontSize: "18px",
                                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                    lineHeight: 1.7,
                                    mb: 2,
                                }}
                            >
                                עובד יסודי, אמין ובעל אחריות גבוהה, עם יכולת למידה מהירה וחשיבה מערכתית.
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#1D4ED8",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                    lineHeight: 1.7,
                                    mb: 2,
                                }}
                            >
                                אוהב טכנולוגיה, אנשים ותהליכים ארגוניים, ומשלב ביניהם ליצירת פתרונות איכותיים ויעילים.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                                width: "100%",
                                maxWidth: 550,
                                mr: "auto",
                                px: { xs: 2, sm: 0 },
                            }}
                        >
                            <CoreFeature
                                icon={<TargetIcon />}
                                title="מוסר עבודה גבוה"
                                description="אדם אחראי וסבלני עם יכולת למידה מהירה"
                                delay={0.1}
                            />
                            <CoreFeature
                                icon={<LightbulbIcon />}
                                title="חשיבה מערכתית"
                                description="ראייה כוללת משולבת עם תשומת לב לפרטים"
                                delay={0.2}
                            />
                            <CoreFeature
                                icon={<FavoriteIcon />}
                                title="עבודת צוות"
                                description="תקשורת בין־אישית מצוינת ויכולת שיתוף פעולה"
                                delay={0.3}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;