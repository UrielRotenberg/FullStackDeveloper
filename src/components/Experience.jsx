import React from "react";
import { Box, Typography, Container, Card, CardContent, List, ListItem, Divider, } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RevealAnimation from "./RevealAnimation";
import { Briefcase } from "lucide-react";

const Experience = () => {
    const experience = {
        company: "שירות בתי הסוהר - יחידת הפיתוח",
        role: "מפתח פול סטאק ובן שירות טכנולוגי",
        details: [
            "פיתוח ותחזוקת מערכות פנים - ארגוניוות מורכבות בשירות בתי הסוהר.",
            "פיתוח צד לקוח ב‏React עם התממשקות ל‏API מבוססי ‏.NET.",
            "פיתוח צד שרת בגישת #C, בניית Stored Procedures מורכבות מול SQL Server.",
            "שיפור חוויית המשתמש, כלל פיתוח רכיבי UI דינמיים, ניהול טבלאות אסינכרוניות ופתרונות חכמות.",
            "עבודה צמודה עם צוותי פיתוח וניהול תוך הקפדה על איכות, דיוק ועמידה בלוחות זמנים."
        ]
    };

    return (
        <Box
            component="section"
            id="experience"
            sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#EFF6FF" }}
        >
            <Container maxWidth="lg">
                <RevealAnimation>
                    <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                        <Briefcase size={32} color="#1D4ED8" strokeWidth={2.2} />
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
                            ניסיון מקצועי
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

                <RevealAnimation delay={0.2}>
                    <Card
                        sx={{
                            position: "relative",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                            backgroundColor: "#ffffff",
                            px: { xs: 3, md: 6 },
                            py: { xs: 4, md: 6 },
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                            },
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "8px",
                                height: "100%",
                                backgroundColor: "#1D4ED8",
                                borderTopRightRadius: "8px",
                                borderBottomRightRadius: "8px",
                            },
                        }}
                    >
                        <CardContent sx={{ direction: "rtl" }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: "#0F172A",
                                    fontSize: { xs: "24px", md: "30px" },
                                    mb: 0.8,
                                }}
                            >
                                {experience.company}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#1D4ED8",
                                    fontSize: { xs: "18px", md: "20px" },
                                    fontWeight: 600,
                                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                    mb: 2,
                                }}
                            >
                                {experience.role}
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    alignItems: { xs: "flex-start", sm: "center" },
                                    justifyContent: "flex-start",
                                    gap: 2,
                                    color: "#475569",
                                    fontSize: "16px",
                                    mb: 3,
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    <CalendarTodayIcon sx={{ fontSize: 20, color: "#475569" }} />
                                    <Typography sx={{ fontSize: "16px", color: "#475569" }}>
                                        2024 - הווה
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    <LocationOnIcon sx={{ fontSize: 20, color: "#475569" }} />
                                    <Typography sx={{ fontSize: "16px", color: "#475569" }}>
                                        ישראל
                                    </Typography>
                                </Box>
                            </Box>

                            <Divider sx={{ mb: 3, borderColor: "#E2E8F0" }} />

                            <Typography
                                component="h4"
                                sx={{
                                    color: "#0F172A",
                                    fontSize: { xs: "18px", md: "20px" },
                                    fontWeight: 700,
                                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                    mb: 3,
                                }}
                            >
                                תחומי אחראיות עיקריים:
                            </Typography>

                            <List>
                                {experience.details.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        disableGutters
                                        sx={{
                                            alignItems: "flex-start",
                                            py: 0.5,
                                            display: "flex",
                                            flexDirection: "row",
                                            gap: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: "#DBEAFE",
                                                color: "#1D4ED8",
                                                borderRadius: "50%",
                                                p: "6px",
                                                mt: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    backgroundColor: "#1D4ED8",
                                                    color: "#FFFFFF",
                                                },
                                            }}
                                        >
                                            <CheckCircleIcon sx={{ fontSize: 22 }} />
                                        </Box>

                                        <Typography
                                            sx={{
                                                color: "#334155",
                                                fontSize: { xs: "16px", md: "18px" },
                                                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                                lineHeight: 1.7,
                                                flex: 1,
                                                textAlign: "right",
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </RevealAnimation>
            </Container>
        </Box>
    );
};

export default Experience;