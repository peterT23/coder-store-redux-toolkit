import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavbar from "./components/PublicNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropDrillingExercise from "./pages/PropDrillingExercise";
import NotFoundPage from "./pages/NotFoundPage";
import AlertMsg from "./components/AlertMsg";
import ReduxExercise from "./pages/ReduxExercise";
import PropDrillingFinal from "./pages/PropDrillingFinal";
import ReduxFinal from "./pages/ReduxFinal";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from "@mui/material/colors";

const globalTheme = createTheme({
  palette: {
    background: {
      primary: "#d74742",
      secondary: "#292FF2",
      contrastText: "#fff"
    },
    primary: {
      main: "#d74742",
    },
    secondary: {
      main: "#292FF2"
    },
    action: {
      active: "#d74742"
    },
    success: {
      main: "#1DF267",
    },
    error: {
      main: "#F23C35",
      contrastText: "#fff"
    },
    warning: {
      main: "#F2D34E"
    }
  },
})

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          marginBottom: "1rem",
        },
      },
      variants: [
        {
          props: { variant: "main" },
          style: {
            "&:hover": {
              backgroundColor: globalTheme.palette.background.primary,
              color: "#fff"
            },
            color: "#000"
          }
        },
        {
          props: { variant: "success" },
          style: {
            "&:hover": {
              backgroundColor: globalTheme.palette.success.light,
            },
            "&:focus": {
              outline: "none",
            },
            color: globalTheme.palette.success.contrastText,
            backgroundColor: globalTheme.palette.success.main,
          }
        },
        {
          props: { variant: "error" },
          style: {
            "&:hover": {
              backgroundColor: globalTheme.palette.error.light,
            },
            "&:focus": {
              outline: "none",
            },
            color: globalTheme.palette.error.contrastText,
            backgroundColor: globalTheme.palette.error.main,
          }
        }
      ]
    }
  }
}, globalTheme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PublicNavbar />
        <AlertMsg />
        <Routes>
          <Route path="/" element={<PropDrillingExercise />} />
          <Route path="/prop-final" element={<PropDrillingFinal />} />
          <Route path="/redux-exercise" element={<ReduxExercise />} />
          <Route path="/redux-final" element={<ReduxFinal />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
