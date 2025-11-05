import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink, Events } from "react-scroll";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const [active, setActive] = useState("בית");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = ["בית", "אודות", "ניסיון", "השכלה", "מיומנויות", "צור קשר"];

  React.useEffect(() => {
    Events.scrollEvent.register("begin", () => { });
    Events.scrollEvent.register("end", () => { });
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const getSectionId = (item) =>
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
              : "contact";

  const getOffset = (item) => {
    if (item === "בית") return -200;
    if (item === "צור קשר") return -120;
    return -100;
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "#FFFFFFCC",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e0e0e0",
        color: "#0E1F40",
        py: { xs: 0.5, md: 1 },
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
            px: { xs: 1, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              direction: "rtl",
            }}
          >
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}ur-logo.png`}
              alt="UR Logo"
              sx={{ height: { xs: 60, md: 70 }, width: "auto", order: 2 }}
            />
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
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  lineHeight: 1.1,
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#334155",
                  fontSize: { xs: "0.7rem", md: "0.75rem" },
                  letterSpacing: 0.2,
                }}
              >
                Turning vision into code
              </Typography>
            </Box>
          </Box>

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: { xs: 1.5, md: 3 } }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  to={getSectionId(item)}
                  smooth={true}
                  duration={700}
                  offset={getOffset(item)}
                  spy={true}
                  onSetActive={() => setActive(item)}
                >
                  <Button
                    sx={{
                      color: active === item ? "#1976D2" : "#0E1F40",
                      fontWeight: active === item ? 700 : 500,
                      fontSize: "1rem",
                      position: "relative",
                      backgroundColor: "transparent",
                      transition: "0.3s",
                      minWidth: 0,
                      paddingX: { xs: 1, md: 2 },
                      "&:hover": {
                        color: "#1976D2",
                        background: "transparent",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        backgroundColor: "#1976D2",
                        borderRadius: "2px",
                        transition: "transform 0.8s ease",
                        transform: active === item ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "center",
                      },
                    }}
                  >
                    {item}
                  </Button>
                </ScrollLink>
              ))}
            </Box>
          ) : (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    p: 2,
                    direction: "rtl",
                  }}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item} disablePadding>
                        <ScrollLink
                          to={getSectionId(item)}
                          smooth={true}
                          duration={600}
                          offset={getOffset(item)}
                          onClick={() => {
                            setDrawerOpen(false);
                            setActive(item);
                          }}
                        >
                          <ListItemButton>
                            <ListItemText
                              primary={item}
                              primaryTypographyProps={{
                                sx: {
                                  fontWeight:
                                    active === item ? "bold" : "normal",
                                  color:
                                    active === item ? "#1976D2" : "#0E1F40",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ScrollLink>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;