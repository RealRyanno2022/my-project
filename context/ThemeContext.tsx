import React, { createContext, useState, ReactNode } from "react";

export const lightStyles = {
  background: '#FFFFFF',
  text: '#000000',
  // add all the styles for light theme
};

export const darkStyles = {
  background: '#000000',
  text: '#FFFFFF',
  // add all the styles for dark theme
};

// Define the type of your theme
export type Theme = typeof lightStyles | typeof darkStyles;

// Define the context type
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create the context
export const ThemeContext = createContext<ThemeContextType>({
  theme: lightStyles, // default value
  setTheme: () => {} // default value
});

// Create the ThemeProvider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightStyles); // start with light theme
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};