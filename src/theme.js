import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#0E1F40", // כחול כהה עמוק
    },
    secondary: {
      main: "#1976D2", // כחול עז כמו בכפתורים
    },
    background: {
      default: "#F5F8FC", // רקע כללי בהיר מאוד
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1B1B1B",
      secondary: "#5A5A5A",
    },
  },
  typography: {
    fontFamily: "'Heebo', 'Rubik', sans-serif",
    h1: { fontWeight: 900 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.8 },
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows: Array(25).fill("0px 4px 12px rgba(0,0,0,0.08)"), // צל אחיד ועדין
});

export default theme;