import React from "react";
import { Box, Button, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import { Link as ScrollLink } from "react-scroll";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
    // גלילה חלקה למקטע צור קשר
    const handleScrollToContact = (e) => {
        e.preventDefault();
        const section = document.querySelector("#contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box
            id="hero"
            sx={{
                backgroundColor: "#EFF6FF",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                paddingY: { xs: 6, md: 10 },
                paddingX: 2,
            }}
        >
            {/* לוגו */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Box
                    sx={{
                        width: { xs: 110, sm: 140, md: 170 },
                        height: { xs: 110, sm: 140, md: 170 },
                        mx: "auto",
                        // mb: 3,
                    }}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}ur-logo.png`}
                        alt="UR Logo"
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                </Box>
            </motion.div>

            {/* כותרת גדולה בסגנון מקצועי */}
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 700,
                    color: "#0B1B35",
                    fontSize: { xs: "2.4rem", sm: "3.4rem", md: "3.8rem" },
                    lineHeight: 1.2,
                    mb: 1,
                }}
            >
                {/* Full Stack Developer */}
                אוריאל רוטנברג
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    color: "#4C5D73",
                    fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.5rem" },
                    fontStyle: "italic",
                    mb: 4,
                }}
            >
                {/* Turning vision into code */}
                Full Stack Developer
            </Typography>

            {/* טכנולוגיות */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 1.5,
                    mb: 0.5,
                }}
            >
                {["Dapper", ".NET", "SQL Server", "#C", "React"].map((tech, i) => (
                    <Chip
                        key={i}
                        label={tech}
                        sx={{
                            backgroundColor: "#ffffff",
                            color: "#64748b ",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                            px: 2,
                            py: 2,
                            borderRadius: "9999px",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "#f3f6ff",
                                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                            },
                        }}
                    />
                ))}
            </Box>

            {/* תיאור מקצועי מדויק */}
            <Typography
                variant="body1"
                sx={{
                    maxWidth: "768px",
                    mx: "auto",
                    mt: 4,
                    mb: 3,
                    color: "#475569", // צבע אפור-כחלחל עדין
                    fontSize: { xs: "18px", md: "24px" }, // גודל מדויק לפי התמונה
                    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                    lineHeight: 1.6,
                    textAlign: "center",
                    fontWeight: 400,
                }}
            >
                מפתח פול סטאק עם ניסיון בפיתוח מערכות פנים-ארגוניות מורכבות.<br />
                משלב חשיבה מערכתית עם תשומת לב לפרטים ליצירת פתרונות איכותיים.
            </Typography>

            {/* כפתורים */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4, // בדיוק כמו gap-4
                    mt: 4,
                }}
            >
                {/* צור קשר */}
                <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={600}
                    offset={-80} // מרווח קטן כדי שלא יחתוך את תחילת הסקשן
                >
                    <Button
                        startIcon={<EmailIcon />}
                        sx={{
                            backgroundColor: "#1D4ED8",
                            color: "#FFFFFF",
                            fontSize: "18px",
                            padding: "12px 32px",
                            borderRadius: "30px",
                            gap: "8px",
                            "&:hover": { backgroundColor: "#1E40AF" },
                        }}
                    >
                        צור קשר
                    </Button>
                </ScrollLink>

                {/* הורד קורות חיים */}
                <Button
                    variant="outlined"
                    href={`${import.meta.env.BASE_URL}קורות חיים - אוריאל רוטנברג.pdf`}
                    download="קורות חיים - אוריאל רוטנברג.pdf"
                    startIcon={<DownloadIcon />}
                    sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#0A0A0A",
                        fontSize: "18px",
                        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                        fontWeight: 500,
                        textTransform: "none",
                        padding: "12px 32px",
                        borderRadius: "30px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: "#F8FAFF",
                            borderColor: "#1E40AF",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                        },
                    }}
                >
                    הורד קורות חיים
                </Button>
            </Box>
        </Box>
    );
};

export default Hero;