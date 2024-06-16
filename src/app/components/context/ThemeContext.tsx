"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

type Theme = "light-theme" | "dark-theme";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark-theme");

  const toggleTheme = () => {
    setTheme((prevTheme: Theme) => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
