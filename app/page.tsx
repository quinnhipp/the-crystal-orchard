"use client";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

export default function Start() {
  const navLinks = ["Home", "The Band", "Listen", "Tour", "Gallery"];

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#6FF78B",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <main className="">
        <Home />
        {/* <Navbar /> */}
      </main>
    </MuiThemeProvider>
  );
}
