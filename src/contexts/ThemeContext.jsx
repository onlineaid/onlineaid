import React, { createContext, useContext, useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { lightPalette, darkPalette } from "../theme/palette"; // Import your light and dark palette configurations

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Define your themes based on the selected theme mode
  const theme = createTheme({
    palette: themeMode === "light" ? lightPalette : darkPalette,
    // Other theme settings...
  });

  useEffect(() => {
    // Save the selected theme mode to localStorage or any other method to persist the theme mode.
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  // Load the theme mode from localStorage on initial render
  useEffect(() => {
    const savedThemeMode = localStorage.getItem("themeMode");
    if (savedThemeMode) {
      setThemeMode(savedThemeMode);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
