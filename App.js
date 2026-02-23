import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { getStyles } from './src/components/themedStyles';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Experiences from './src/components/Experiences';
import Skills from './src/components/Skills';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';

function AppContent() {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Header />
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Made with React Native · Responsive for web & mobile</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
