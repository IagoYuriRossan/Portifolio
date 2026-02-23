import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Paleta Dark (Ciano Cyberpunk - atual)
const darkTheme = {
  mode: 'dark',
  primary: '#06b6d4',
  accent: '#0891b2',
  bg: '#0f172a',
  card: '#1e293b',
  text: '#f8fafc',
  textSecondary: '#94a3b8',
  border: '#334155',
  buttonText: '#0f172a',
  avatarBorder: '#06b6d4'
};

// Paleta Light
const lightTheme = {
  mode: 'light',
  primary: '#0891b2',
  accent: '#06b6d4',
  bg: '#f8fafc',
  card: '#ffffff',
  text: '#0f172a',
  textSecondary: '#475569',
  border: '#e2e8f0',
  buttonText: '#ffffff',
  avatarBorder: '#0891b2'
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  
  const theme = isDark ? darkTheme : lightTheme;
  
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
