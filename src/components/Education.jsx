import React from "react";
import {
    Box,
    Typography,
    Container,
    Card,
    Chip,
    Grid,
} from "@mui/material";
import { GraduationCap, BookOpen, BarChart3 } from "lucide-react";
import RevealAnimation from "./RevealAnimation";

const Education = () => {
    const techList = [
        "JavaScript", "TypeScript", "React.js", "Node.js", "MongoDB", "SQL",
        "HTML", "CSS", "UI/UX"
    ];

    return (
        <Box
            component="section"
            id="education"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: "#FFFFFFCC",
            }}
        >
            <Container maxWidth="lg">
                {/* 🔹 כותרת */}
                <RevealAnimation>
                    <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                        <GraduationCap size={32} color="#1D4ED8" strokeWidth={2.2} />
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
                            השכלה
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

                {/* 🔹 כרטיס לימודים */}
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
                        {/* 🔸 פרטי הלימודים */}
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                color: "#0F172A",
                                fontSize: "28px",
                                mb: 0.8,
                            }}
                        >
                            Full Stack Development
                        </Typography>
                        <Typography
                            sx={{
                                color: "#1D4ED8",
                                fontSize: "20px",
                                fontWeight: 600,
                                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                mb: 1,
                            }}
                        >
                            מכללה למנהל ירושלים
                        </Typography>
                        <Typography
                            sx={{
                                color: "#475569",
                                fontSize: "16px",
                                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                mb: 4,
                            }}
                        >
                            משרד העבודה – אגף בכיר להכשרה מקצועית ופיתוח כוח אדם
                        </Typography>

                        {/* 🔸 נתוני קורס */}
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                                mb: 4,
                                direction: "rtl",
                            }}
                        >
                            {/* היקף לימוד – בצד ימין */}
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "space-between",
                                        backgroundColor: "#FFFFFF",
                                        borderRadius: "12px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                        p: 2,
                                        height: 104,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    <Box sx={{ textAlign: "right", mt: 0.5 }}>
                                        <Typography
                                            sx={{
                                                color: "#475569",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                mb: 0.5,
                                            }}
                                        >
                                            היקף לימוד
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "#0F172A",
                                                fontSize: "20px",
                                                fontWeight: 700,
                                            }}
                                        >
                                            400 שעות
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "#64748B",
                                                fontSize: "14px",
                                            }}
                                        >
                                            קורס ממשלתי מאושר
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            backgroundColor: "#1D4ED8",
                                            borderRadius: "8px",
                                            width: 40,
                                            height: 40,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="#FFFFFF"
                                            style={{ width: 20, height: 20 }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 4h16v16H4V4zM8 8h8v4H8V8zM12 20h9"
                                            />
                                        </svg>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* ציון ממוצע – בצד שמאל */}
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "space-between",
                                        backgroundColor: "#FFFFFF",
                                        borderRadius: "12px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                        p: 2,
                                        height: 104,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    <Box sx={{ textAlign: "right", mt: 0.5 }}>
                                        <Typography
                                            sx={{
                                                color: "#475569",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                mb: 0.5,
                                            }}
                                        >
                                            ציון ממוצע
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "#1D4ED8",
                                                fontSize: "28px",
                                                fontWeight: 700,
                                            }}
                                        >
                                            97
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            backgroundColor: "#1D4ED8",
                                            borderRadius: "8px",
                                            width: 40,
                                            height: 40,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="#FFFFFF"
                                            style={{ width: 20, height: 20 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                                        </svg>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        {/* 🔸 טכנולוגיות שנלמדו */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#0F172A",
                                fontSize: "20px",
                                mb: 2,
                                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                            }}
                        >
                            טכנולוגיות שנלמדו:
                        </Typography>

                        <Box display="flex" flexWrap="wrap" gap={1.5}>
                            {techList.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    variant="outlined"
                                    sx={{
                                        borderColor: "#1D4ED8",
                                        color: "#1D4ED8",
                                        fontWeight: 600,
                                        borderRadius: "10px",
                                        fontSize: "0.9rem",
                                        px: 1.5,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#DBEAFE",
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    </Card>
                </RevealAnimation>
            </Container>
        </Box>
    );
};

export default Education;