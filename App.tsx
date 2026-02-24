import React, { FC } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { getStyles } from './src/components/themedStyles';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Experiences from './src/components/Experiences';
import Skills from './src/components/Skills';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';

const AppContent: FC = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
      <StatusBar barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'} />
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { minHeight: '100%' }]}>
          <View style={styles.innerContainer}>
            <Header />
            <Hero />
            <About />
            <Experiences />
            <Skills />
            <Projects />
            <Contact />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Made with React Native · iOS & Android</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const App: FC = () => {
  return React.createElement(
    SafeAreaProvider,
    null,
    React.createElement(
      ThemeProvider,
      { children: React.createElement(AppContent) }
    )
  );
};

export default App;
