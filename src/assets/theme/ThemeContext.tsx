import React, {  createContext, useContext, useEffect, useMemo, useState } from "react";
import { getDesignTokens } from "./themePalettes"; // Ensure this file exists and exports correctly
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

interface ThemeToggleProviderProps {
  children: React.ReactNode;
}

const ThemeToggleProvider: React.FC<ThemeToggleProviderProps> = ({ children }) => {
  const prevTheme = localStorage.getItem("theme") || "dark"; // Default to light if nothing found
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${prevTheme})`);
  const [mode, setMode] = useState(prevTheme); // Use the stored theme or default to light

  useEffect(() => {
    setMode(prefersDarkMode? "dark" : "light"); // Update mode based on media query result
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light"? "dark" : "light")); // Toggle between light and dark modes
        localStorage.setItem("theme", mode); // Update local storage with current mode
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]); // Create theme based on current mode

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeToggleProvider; // Correctly export the component as the default
export const useColorTheme = () => useContext(ColorModeContext);
