import { ViewStyle, TextStyle, ImageStyle, Animated } from 'react-native';
import React from 'react';

// Theme types
export interface ThemeColors {
  mode: 'light' | 'dark';
  primary: string;
  accent: string;
  bg: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
  buttonText: string;
  avatarBorder: string;
}

export interface ThemeContextType {
  theme: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
}

// Component props types
export interface FadeInSectionProps {
  children?: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  style?: ViewStyle | ViewStyle[];
}

export interface StaggeredItemProps {
  children?: React.ReactNode;
  index: number;
  style?: ViewStyle | ViewStyle[];
}

// Data types
export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  desc: string;
}

export interface Project {
  id: number;
  title: string;
  desc: string;
  url: string;
}

export interface SkillsCategory {
  [key: string]: string[];
}

// Navigation types
export interface NavItem {
  label: string;
  id: string;
}

// Animated value types
export type AnimatedValue = Animated.Value | Animated.ValueXY;
