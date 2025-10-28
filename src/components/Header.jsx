import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { Link as ScrollLink, Events, scroller } from "react-scroll";

const Header = () => {
  const [active, setActive] = useState("בית");

  const navItems = ["בית", "אודות", "ניסיון", "השכלה", "מיומנויות", "צור קשר"];

  React.useEffect(() => {
    // מאזין לגלילה — כשמגיעים לאזור מסוים משנה אקטיבי
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "#FFFFFFCC",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e0e0e0",
        color: "#0E1F40",
        py: 0.5,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            direction: "rtl",
          }}
        >
          {/* 🔹 טקסט מימין ולוגו משמאל */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              direction: "rtl",
            }}
          >
            {/* לוגו משמאל */}
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}ur-logo.png`}
              alt="UR Logo"
              sx={{
                height: 70,
                width: "auto",
                order: 2,
              }}
            />

            {/* טקסט מקצועי מימין */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
                textAlign: "left",
                order: 1,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#1E293B",
                  fontSize: "1rem",
                  lineHeight: 1.1,
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#334155",
                  fontSize: "0.75rem",
                  letterSpacing: 0.2,
                }}
              >
                Turning vision into code
              </Typography>
            </Box>
          </Box>

          {/* ✅ תפריט ניווט */}
          <Box sx={{ display: "flex", gap: 3 }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={
                  item === "בית"
                    ? "hero"
                    : item === "אודות"
                    ? "about"
                    : item === "ניסיון"
                    ? "experience"
                    : item === "השכלה"
                    ? "education"
                    : item === "מיומנויות"
                    ? "skills"
                    : "contact"
                }
                smooth={true}
                duration={700}
                offset={-80}
                spy={true} // ✅ מאפשר לזהות את הקטע הפעיל בגלילה
                onSetActive={() => setActive(item)} // ✅ משנה מצב כשמגיעים אליו
              >
                <Button
                  sx={{
                    color: active === item ? "#1976D2" : "#0E1F40",
                    fontWeight: active === item ? 700 : 500,
                    fontSize: "1rem",
                    position: "relative",
                    backgroundColor: "transparent",
                    transition: "0.3s",
                    "&:hover": { color: "#1976D2", background: "transparent" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: active === item ? "3px" : "0px",
                      backgroundColor: "#1976D2",
                      borderRadius: "2px",
                      transition: "0.3s ease",
                    },
                  }}
                >
                  {item}
                </Button>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;