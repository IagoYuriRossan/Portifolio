import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeColors, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Paleta Dark (Ciano Cyberpunk)
const darkTheme: ThemeColors = {
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
const lightTheme: ThemeColors = {
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

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(true);
  
  const theme = isDark ? darkTheme : lightTheme;
  
  const toggleTheme = () => setIsDark(!isDark);

  const value: ThemeContextType = { theme, isDark, toggleTheme };

  return React.createElement(
    ThemeContext.Provider,
    { value },
    children
  );
};
