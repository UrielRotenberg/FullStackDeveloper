import React, { useState } from "react";
import { Box, Typography, Container, Card, Chip, Dialog, DialogContent, Grid, } from "@mui/material";
import { GraduationCap, BookOpen, TrendingUp } from "lucide-react";
import RevealAnimation from "./RevealAnimation";

const Education = () => {
    const [openImage, setOpenImage] = useState(null);
    const handleOpenImage = (src) => setOpenImage(src);
    const handleCloseImage = () => setOpenImage(null);

    const techList = [
        "HTML",
        "CSS",
        "UI/UX",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Node.js",
        "SQL",
        "MongoDB"
    ];

    return (
        <Box
            component="section"
            id="education"
            sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#FFFFFFCC" }}
        >
            <Container maxWidth="lg">
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

                {/* כרטיס לימודים */}
                <RevealAnimation delay={0.2}>
                    <Card
                        sx={{
                            position: "relative",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                            backgroundColor: "#eff6ff",
                            px: { xs: 3, md: 6 },
                            py: { xs: 4, md: 6 },
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                            },
                        }}
                    >
                        {/* כותרות */}
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, color: "#0F172A", fontSize: "28px", mb: 0.8 }}
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
                                fontSize: "18px",
                                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                mb: 4,
                            }}
                        >
                            משרד העבודה – אגף בכיר להכשרה מקצועית ופיתוח כוח אדם
                        </Typography>

                        {/* כרטיסיות */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                marginBottom: "auto",
                                gap: 2,
                                mb: 4,
                            }}
                        >
                            {/* היקף לימוד */}
                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#ffffff",
                                    borderRadius: "14px",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                                    px: 3,
                                    py: 2,
                                    direction: "rtl",
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#1D4ED8",
                                            borderRadius: "10px",
                                            width: 48,
                                            height: 48,
                                            marginBottom: "auto",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <BookOpen size={24} color="#fff" />
                                    </Box>
                                    <Box sx={{ textAlign: "right", pr: 2 }}>
                                        <Typography sx={{ color: "#64748B", fontSize: "14px", fontWeight: 500, mb: 0.5 }}>
                                            היקף לימוד
                                        </Typography>
                                        <Typography sx={{ color: "#0F172A", fontSize: "20px", fontWeight: 700 }}>
                                            400 שעות
                                        </Typography>
                                        <Typography sx={{ color: "#475569", fontSize: "14px" }}>
                                            קורס ממשלתי מאושר
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* תעודת גמר */}
                                <Box textAlign="center">
                                    <Box
                                        component="img"
                                        src="/public/תעודת גמר.png"
                                        alt="תעודת גמר"
                                        onClick={() => handleOpenImage("/public/תעודת גמר.png")}
                                        sx={{
                                            width: 120,
                                            height: "auto",
                                            cursor: "pointer",
                                            borderRadius: 2,
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                            transition: "0.3s",
                                            ml: 2,
                                            "&:hover": { transform: "scale(1.03)" },
                                        }}
                                    />
                                </Box>
                            </Box>

                            {/* ציון ממוצע */}
                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                                    px: 3,
                                    py: 2,
                                    direction: "rtl",
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#1D4ED8",
                                            borderRadius: "10px",
                                            marginBottom: "auto",
                                            padding: "12px",
                                            width: 48,
                                            height: 48,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <TrendingUp size={24} color="#fff" />
                                    </Box>
                                    <Box sx={{ textAlign: "right", pr: 2 }}>
                                        <Typography sx={{ color: "#64748B", fontSize: "14px", fontWeight: 500, mb: 0.5 }}>
                                            ציון ממוצע
                                        </Typography>
                                        <Typography sx={{ color: "#1D4ED8", fontSize: "36px", fontWeight: 700 }}>
                                            97
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* גיליון ציונים */}
                                <Box textAlign="center">
                                    <Box
                                        component="img"
                                        src="/public/גליון ציונים.png"
                                        alt="גליון ציונים"
                                        onClick={() => handleOpenImage("/public/גליון ציונים.png")}
                                        sx={{
                                            width: 120,
                                            height: "auto",
                                            cursor: "pointer",
                                            borderRadius: 2,
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                            transition: "0.3s",
                                            ml: 2,
                                            "&:hover": { transform: "scale(1.03)" },
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        {/* טכנולוגיות */}
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

                        <Box display="flex" flexWrap="wrap" gap={1.5} mb={5}>
                            {techList.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: "#ffffff",
                                        color: "#171717",
                                        fontWeight: 600,
                                        borderRadius: "10px",
                                        fontSize: "0.9rem",
                                        px: 1.5,
                                        transition: "all 0.3s ease",
                                        "&:hover": { backgroundColor: "#1D4ED8", color: "#ffffff" },
                                    }}
                                />
                            ))}
                        </Box>

                        {/* תצוגת תעודה מוגדלת */}
                        <Dialog open={!!openImage} onClose={handleCloseImage} maxWidth="md">
                            <DialogContent sx={{ p: 0 }}>
                                <Box
                                    component="img"
                                    src={openImage}
                                    alt="תמונה"
                                    sx={{ width: "100%", height: "auto" }}
                                />
                            </DialogContent>
                        </Dialog>
                    </Card>
                </RevealAnimation>
            </Container>
        </Box>
    );
};

export default Education;