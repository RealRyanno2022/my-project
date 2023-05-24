import { ThemeContext, lightStyles, darkStyles, Theme } from './ThemeContext';
import React, { createContext, useState, ReactNode } from "react";

export const ThemeProvider: React.FC<({ children: ReactNode })>= ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightStyles); // start with light theme
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};