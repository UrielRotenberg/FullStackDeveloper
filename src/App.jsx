import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import theme from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactFormPage from "./pages/ContactFormPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParallaxProvider>
        <Router>
          <Box dir="rtl" sx={{ overflowX: "hidden" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Hero />
                    <About />
                    <Experience />
                    <Education />
                    <Skills />
                    <Box id="contact">
                      <Contact />
                    </Box>
                    <Footer />
                  </>
                }
              />
              <Route path="/contact" element={<ContactFormPage />} />
            </Routes>
          </Box>
        </Router>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
